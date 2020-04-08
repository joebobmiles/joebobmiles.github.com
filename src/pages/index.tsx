import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"


import "../styles/global.sass"
import "../styles/homepage.sass"


const Site = ({ data }) => {

    const allMdx = data.allMdx

    const { totalCount, edges } = allMdx

    return (
        <Layout>
            {edges.map(({ node }) => node)
            .map(({ frontmatter, fields, excerpt, id }) => (
                <Link key={id} to={fields.slug}>
                    <article>
                        <h3>
                            {frontmatter.title} <span>&mdash; {frontmatter.date}</span>
                        </h3>
                        <p>{excerpt}</p>
                    </article>
                </Link>
            ))}
        </Layout>
    )
}

export default Site


export const query = graphql`
query {
    allMdx {
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