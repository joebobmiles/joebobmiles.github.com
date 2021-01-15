import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery, Link } from "gatsby"

import styles from "../styles/Layout.module.scss";

export default ({ children }) => {
    const { site, siteBuildMetadata } = useStaticQuery(graphql`
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
    `)

    const siteTitle = site.siteMetadata.title
    const siteDescription = site.siteMetadata.description

    const authorName = site.siteMetadata.author.name

    const siteBuildTime = siteBuildMetadata.buildTime

    return (
        <>
            <Helmet>
                <title>{siteTitle}</title>

                <meta charSet="utf-8" />
                <meta name="author" content={authorName} />
                <meta name="description" content={siteDescription} />
            </Helmet>

          <main className={styles.layout}>
            <header>
                <Link to="/">
                    <h1>{siteTitle}</h1>
                </Link>
            </header>

            {children}

            <footer>
                <p>
                    &copy; {authorName} {siteBuildTime}
                </p>
            </footer>
          </main>
        </>
    )

}