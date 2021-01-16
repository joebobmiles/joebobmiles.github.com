import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"

import "../styles/_global.scss"
import styles from "./index.module.scss";

const Site = ({ data: { allMdx: { edges }} }) => (
  <Layout>
    <main>
      {
        edges
        .map(({ node }) => node)
        .map(({ frontmatter, fields, excerpt, id }) => (
          <Link
            key={id}
            to={fields.slug}
            className={styles.articleBlurb}
          >
            <h3>
              {frontmatter.title} <span>&mdash; <time>{frontmatter.date}</time></span>
            </h3>
            <p>{excerpt}</p>
          </Link>
        ))
      }
    </main>
  </Layout>
);

export default Site


export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
            node {
                frontmatter {
                    date(formatString: "DD MMMM, YYYY")
                    title
                }
                fields {
                    slug
                }
                excerpt
                id
            }
        }
        totalCount
    } 
}
`