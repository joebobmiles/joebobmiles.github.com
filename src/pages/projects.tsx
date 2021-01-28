import * as React from "react";
import {Link, graphql} from "gatsby";
import classnames from "classnames";

import Layout from "../components/Layout";
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
                              <a
                                href={v}
                                target="_blank"
                                rel="external noopener nofollower"
                              >
                                <i className="fas fa-globe"></i>
                              </a>
                            </li>
                          );

                        case "github":
                          return v === null ? null : (
                            <li>
                              <a
                                href={`https://github.com/${v}`}
                                target="_blank"
                                rel="external noreferrer noopener nofollower"
                              >
                                <i className="fab fa-github"></i>
                              </a>
                            </li>
                          );

                        case "twitter":
                          return v === null ? null : (
                            <li>
                              <a
                                href={`https://twitter.com/${v}`}
                                target="_blank"
                                rel="external noreferrer noopener nofollower"
                              >
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                          );

                        case "medium":
                          return v === null ? null : (
                            <li>
                              <a
                                href={`https://medium.com/${v}`}
                                target="_blank"
                                rel="external noreferrer noopener nofollower"
                              >
                                <i className="fab fa-medium"></i>
                              </a>
                            </li>
                          );

                        case "dev":
                          return v === null ? null : (
                            <li>
                              <a
                                href={`https://dev.to/${v}`}
                                target="_blank"
                                rel="external noreferrer noopener nofollower"
                              >
                                <i className="fab fa-dev"></i>
                              </a>
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