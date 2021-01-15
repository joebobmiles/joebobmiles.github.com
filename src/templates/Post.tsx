import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

import styles from "./Post.module.scss";

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

          <article className={styles.post}>
            <header>
              <time>{frontmatter.date}</time>
              <h1>{frontmatter.title}</h1>
            </header>

              <MDXProvider>
                  <MDXRenderer>
                      {body}
                  </MDXRenderer>
              </MDXProvider>
          </article>
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