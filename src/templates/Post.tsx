import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"


import "../styles/post.sass"


type PostProps = { data?: any }


export default ({ data }: PostProps) => {

    const { mdx, site } = data

    const { frontmatter, body, excerpt } = mdx
    const { siteMetadata } = site


    return (
        <Layout>
            <Helmet>
                <title>{mdx.frontmatter.title} &mdash; {siteMetadata.title}</title>

                <meta name="description" content={excerpt} />
            </Helmet>

            <h1>{frontmatter.title}</h1>
            <h3>{frontmatter.date}</h3>

            <MDXProvider>
                <MDXRenderer>
                    {body}
                </MDXRenderer>
            </MDXProvider>

            <p>&mdash; {siteMetadata.author.name}</p>
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
        excerpt
    }
    site {
        siteMetadata {
            title
            author {
                name
            }
        }
    }
}
`