import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"


type PostProps = { data?: any }


export default ({ data }: PostProps) => {

    const { mdx, site } = data

    const { frontmatter, body } = mdx
    const { siteMetadata } = site


    return (
        <Layout>
            <MDXProvider>
                <MDXRenderer>
                    {body}
                </MDXRenderer>
            </MDXProvider>
        </Layout>
    )
}


export const query = graphql`
query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
        frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
        }
        body
    }
    site {
        siteMetadata {
            author {
                name
            }
        }
    }
}
`