import * as React from "react";
import { Link, graphql } from "gatsby";
import classnames from "classnames";

import Layout from "../components/Layout";

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
        styles.fontSemibold
      )}
    >
      👋 Howdy!
    </h1>

    <br/>

    <h2 className={classnames(right, styles.textXl)}>
      My name is <Link className={styles.anchor} to="/about/">{author.name}</Link>.
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
        <a href={`mailto:${author.email}`}><code>{author.email}</code></a> or Tweet&nbsp;
        <a target="_blank" rel="external nofollow noreferrer noopener" href={`https://twitter.com/${author.twitter}`}><code>{author.twitter}</code></a>.
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