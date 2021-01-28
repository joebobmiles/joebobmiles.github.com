import * as React from "react";
import {Link, graphql} from "gatsby";
import classnames from "classnames";

import Layout from "../components/Layout";
import ExternalLink from "../components/ExternalLink";
import {left,right} from "../components/Layout.module.scss";

import styles from "./projects.module.scss";

export default ({ data: { allMdx: { edges } } }) =>
(
  <Layout>
    <h1 className={classnames(left, styles.text4X, styles.voiceHeading)}>
      Projects
    </h1>

    <br/>

    <dl className={classnames(right, styles.syXl)}>
      {
        edges
        .map(({ node }) => node)
        .map(({ frontmatter: { title, links }, excerpt }) => (
          <div className={classnames(styles.project)}>
            <dt className={classnames(styles.mb05)}>
              <h1 className={classnames(styles.voiceHeading)}>
                {title}
              </h1>
            </dt>
            <dd>
              <p>{excerpt}</p>
              <ul>
                {
                  Object.keys(links).map(
                    (k) =>
                    {
                      const v = links[k];

                      switch(k) {
                        case "web":
                          return v === null ? null : (
                            <li>
                              <ExternalLink to={v}>
                                <i className="fas fa-globe"></i>
                              </ExternalLink>
                            </li>
                          );

                        case "github":
                          return v === null ? null : (
                            <li>
                              <ExternalLink to={`https://github.com/${v}`}>
                                <i className="fab fa-github"></i>
                              </ExternalLink>
                            </li>
                          );

                        case "twitter":
                          return v === null ? null : (
                            <li>
                              <ExternalLink to={`https://twitter.com/${v}`}>
                                <i className="fab fa-twitter"></i>
                              </ExternalLink>
                            </li>
                          );

                        case "medium":
                          return v === null ? null : (
                            <li>
                              <ExternalLink to={`https://medium.com/${v}`}>
                                <i className="fab fa-medium"></i>
                              </ExternalLink>
                            </li>
                          );

                        case "dev":
                          return v === null ? null : (
                            <li>
                              <ExternalLink to={`https://dev.to/${v}`}>
                                <i className="fab fa-dev"></i>
                              </ExternalLink>
                            </li>
                          );

                        default:
                          return null;
                      }
                    })
                }
              </ul>
            </dd>
          </div>
        ))
      }
    </dl>
  </Layout>
);

export const query = graphql`
  query {
    allMdx(
      sort: {fields: frontmatter___title, order: DESC},
      filter: {fields: { isProject: { eq: true} } }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            links {
              web
              github
              twitter
              medium
              dev
            }
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
`;