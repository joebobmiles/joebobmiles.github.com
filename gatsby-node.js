const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")


exports.onCreateNode = ({ node, getNode, actions }) => {

    const { createNodeField } = actions

    if (node.internal.type === "Mdx") {

        const slug = createFilePath({
            node,
            getNode,
            basePath: `content`
        }).replace(/_/g, `-`)

        createNodeField({
            node,
            name: `slug`,
            value: slug
        })

    }

}


exports.createPages = async ({
    graphql,
    actions
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
    }`)

    const { createPage } = actions

    slugs.data.allMdx.edges.forEach(({ node }) => {

        const { fields } = node

        createPage({
            path: fields.slug,
            component: path.resolve("./src/templates/Post.tsx"),
            context: {
                slug: fields.slug
            }
        })

    })

}
