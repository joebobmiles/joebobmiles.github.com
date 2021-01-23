const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === "Mdx")
  {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content`
    }).replace(/_/g, `-`)

    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = async ({
  graphql,
  actions: { createPage }
}) => {
  const slugs = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }`
  );

  slugs.data.allMdx.edges.forEach(({ node }) => {
    const { fields: { slug } } = node

    createPage({
      path: slug,
      component: path.resolve("./src/templates/Post.tsx"),
      context: {
        slug
      }
    });
  });
};

exports.onCreateWebpackConfig = ({
  stage, rules, loaders, plugins, actions: { setWebpackConfig }
}) =>
{
  setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(js|ts)x$/,
          loader: "twemoji-loader",
          options: {
            folder: "svg",
            ext: ".svg"
          }
        }
      ]
    },
    resolve: {
      extensions: [
        ".js", ".jsx", ".ts", ".tsx", ".scss"
      ],
      mainFiles: [
        "index", "_index"
      ],
      alias: {
        "@styles": path.resolve(__dirname, "src/styles"),
      },
    },
  });
};