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
              email
              twitter
              github
              codepen
              dev
              medium
              linkedin
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

        <script src="https://kit.fontawesome.com/62cb22b716.js" crossOrigin="anonymous"></script>
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
          <div>
            <nav className={styles.socialMediaLinks} aria-label="Social media quick links">
              <ul>
                <li>
                  <a
                    href={`mailto:${author.email}`}
                    title="Email"
                    target="_blank"
                    rel="external noreferrer noopener nofollow"
                  >
                    <i className="fa fa-at"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://twitter.com/${author.twitter}`}
                    title="Twitter"
                    target="_blank"
                    rel="external noreferrer noopener nofollow"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://github.com/${author.github}`}
                    title="GitHub"
                    target="_blank"
                    rel="external noreferrer noopener nofollow"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://codepen.io/${author.codepen}`}
                    title="CodePen"
                    target="_blank"
                    rel="external noreferrer noopener nofollow"
                  >
                    <i className="fab fa-codepen"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://dev.to/${author.dev}`}
                    title="DEV Community"
                    target="_blank"
                    rel="external noreferrer noopener nofollow"
                  >
                    <i className="fab fa-dev"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://medium.com/${author.medium}`}
                    title="Medium"
                    target="_blank"
                    rel="external noreferrer noopener nofollow"
                  >
                    <i className="fab fa-medium"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://linkedin.com/in/${author.linkedin}`}
                    title="LinkedIn"
                    target="_blank"
                    rel="external noreferrer noopener nofollow"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <p className={styles.textSm}><i className="far fa-copyright" title="&copy;"></i> 2020 &ndash; {currentYear} <Link to="/">{title}</Link></p>
          </div>
        </footer>
      </main>
    </>
  );
};