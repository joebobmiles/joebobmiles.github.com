const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === "Mdx")
  {
    // Create page slug
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

    // Identify page as post.
    const isPost = node.fileAbsolutePath.match(/posts\//) !== null;

    createNodeField({
      node,
      name: `isPost`,
      value: isPost
    });
  }
};

exports.createPages = async ({
  graphql,
  actions: { createPage }
}) => {
  const nodes = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
              isPost
            }
          }
        }
      }
    }`
  );

  nodes.data.allMdx.edges.forEach(({ node }) => {
    const { fields: { slug, isPost } } = node

    createPage({
      path: slug,
      component:
        isPost
        ? path.resolve("./src/templates/Post.tsx")
        : path.resolve("./src/templates/Default.tsx"),
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