import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, useStaticQuery, graphql } from "gatsby";
import classnames from "classnames";

import styles from "./Layout.module.scss";

export default ({ children }) =>
{
  const {
    site: {
      siteMetadata: {
        title,
        description,
        author
      }
    },
    siteBuildMetadata: {
      buildTime: currentYear
    }
  } = useStaticQuery(
    graphql`
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
    `
  );

  return (
    <>
      <Helmet>
        <title>{title}</title>

        <meta charSet="utf-8" />

        <meta name="author" content={author.name} />
        <meta name="description" content={description} />
      </Helmet>

      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={classnames(styles.text5X, styles.fontBlack)}>
            <Link to="/">JRM.DEV</Link>
          </h1>
        </header>

        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2020 &ndash; {currentYear} {title}</p>
        </footer>
      </main>
    </>
  );
};