import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"


export default ({ children }) => {

    const { site, siteBuildMetadata } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
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
    const authorName = site.siteMetadata.author.name
    const siteBuildTime = siteBuildMetadata.buildTime

    return (
        <>
            <Link to="/">
                <h1>{siteTitle}</h1>
            </Link>

            {children}

            <p>
                &copy; {authorName} {siteBuildTime}
            </p>
        </>
    )

}