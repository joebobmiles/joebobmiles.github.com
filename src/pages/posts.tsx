import React from "react"
import { graphql, Link } from "gatsby"
import classnames from "classnames";

import Layout from "../components/Layout"

import styles from "./posts.module.scss";
import {right, left} from "../components/Layout.module.scss";

export default ({ data: { allMdx: { edges }} }) => (
  <Layout>
    <h1 className={classnames(left, styles.text4X, styles.voiceHeading)}>
      Posts
    </h1>

    <br/>

    <dl className={classnames(right, styles.syXl)}>
      {
        edges
        .map(({ node }) => node)
        .map(({ frontmatter, fields, excerpt, id }) => (
          <Link
            key={id}
            to={fields.slug}
            className={styles.article}
          >
            <dt className={classnames(styles.mb05)}>
              <h1 className={classnames(styles.voiceHeading)}>
                {frontmatter.title}
              </h1>
              <time
                className={classnames(styles.textSm, styles.voiceLoud)}
                dateTime={frontmatter.date}
              >
                {new Date(frontmatter.date).toLocaleDateString()}
              </time>
            </dt>
            <dd>
              <p>{excerpt}</p>
            </dd>
          </Link>
        ))
      }
    </dl>
  </Layout>
);

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {fields: {isPost: { eq: true}}}) {
    edges {
      node {
        frontmatter {
          date
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