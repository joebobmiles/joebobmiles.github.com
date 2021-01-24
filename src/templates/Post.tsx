import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Helmet } from "react-helmet"
import classnames from "classnames";

import Layout from "../components/Layout"

import styles from "./Post.module.scss";
import {right, left} from "../components/Layout.module.scss";

type PostProps = { data?: any }

export default ({
  data: {
    mdx: {
      frontmatter,
      body,
      excerpt
    },
    site: {
      siteMetadata: meta
    }
  }
}: PostProps) =>
(
  <Layout>
    <Helmet>
      <title>{ frontmatter.title } &mdash; { meta.title }</title>
      <meta name="description" content={excerpt} />
    </Helmet>

    <article className={styles.article}>
      <header
        className={classnames(left, styles.hMaxFull)}
        style={{
          textAlign: "right",
          position: "sticky",
          top: 0,
          alignSelf: "start"
        }}
      >
        <time className={styles.textSm}>{ frontmatter.date }</time>
        <h1 className={classnames(styles.text3X, styles.fontSemibold)}>
          { frontmatter.title }
        </h1>
      </header>

      <main className={classnames(right, styles.prose)}>
        <MDXProvider>
          <MDXRenderer>
            { body }
          </MDXRenderer>
        </MDXProvider>
      </main>
    </article>
  </Layout>
);

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