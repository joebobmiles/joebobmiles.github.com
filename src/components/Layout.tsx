import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery, Link } from "gatsby"

import styles from "./Layout.module.scss";

export default ({ children }) => {
  const {
    site: {
      siteMetadata: {
        title,
        description,
        author: { name: authorName }
      }
    },
    siteBuildMetadata: {
      buildTime
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author {
            name
          }
        }
      }
      siteBuildMetadata {
        buildTime(formatString: "YYYY")
      }
    }
  `);

  return (
    <>
      <Helmet>
        <title>{title}</title>

        <meta charSet="utf-8" />
        <meta name="author" content={authorName} />
        <meta name="description" content={description} />
      </Helmet>

      <main className={styles.layout}>
        <header>
          <Link to="/">
            <h1>{title}</h1>
          </Link>
        </header>

        {children}

        <footer>
          <p>
            &copy; {authorName} {buildTime}
          </p>
        </footer>
      </main>
    </>
  );
};