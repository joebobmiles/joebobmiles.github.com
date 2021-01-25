import * as React from "react";
import { graphql } from "gatsby";
import classnames from "classnames";

import Layout from "../components/Layout";
import {left, right} from "../components/Layout.module.scss";
import styles from "./about.module.scss";

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
    <article style={{
      display: "contents"
    }}>
      <h1 className={classnames(left, styles.text2X, styles.voiceHeading)}>
        About {author.name}
      </h1>

      <br/>

      <main className={classnames(right, styles.prose)}>
        <p>
          👋 Howdy! My name is {author.name}. I'm a self-described maker,
          hacker, and designer living in Bremerton, Washington, USA 🇺🇸.
        </p>

        <h1>What I like to do.</h1>
      </main>
    </article>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        author {
          name
        }
      }
    }
  }
`;