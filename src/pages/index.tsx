import * as React from "react";
import { Link, graphql } from "gatsby";
import classnames from "classnames";

import Layout from "../components/Layout";
import ExternalLink from "../components/ExternalLink";

import "@styles/global";
import styles from "./index.module.scss";
import { right, left } from "../components/Layout.module.scss";

export default ({
  data: {
    site: {
      siteMetadata: {
        author
      }
    }
  }
}) =>
(
  <Layout>
    <h1
      className={classnames(
        left,
        styles.text4X,
        styles.voiceHeading
      )}
    >
      👋 Howdy!
    </h1>

    <br/>

    <h2 className={classnames(right, styles.textXl)}>
      My name is <Link rel="author" className={styles.link} to="/about/">{author.name}</Link>.
      <br/>
      Your friendly neighborhood hacker 👨‍💻.
    </h2>

    <div className={classnames(right, styles.prose)}>
      <p>
        This is my own little corner of the Internet 🌎, where I&nbsp;
        <Link to="/posts/">learn in public</Link> and keep a&nbsp;
        <Link to="/projects/">directory of my work</Link>.
      </p>
      <p>
        Want to get in touch? Send an email to&nbsp;
        <ExternalLink to={`mailto:${author.email}`}><code>{author.email}</code></ExternalLink> or Tweet&nbsp;
        <ExternalLink to={`https://twitter.com/${author.twitter}`}><code>{author.twitter}</code></ExternalLink>.
      </p>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        author {
          name
          email
          twitter
        }
      }
    }
  }
`;