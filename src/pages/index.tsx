import * as React from "react";
import { Link } from "gatsby";
import classnames from "classnames";

import Layout from "../components/Layout";

import "@styles/global";
import styles from "./index.module.scss";
import { right, left } from "../components/Layout.module.scss";

export default () =>
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
      My name is <Link className={styles.anchor} to="/about/">Joseph R Miles</Link>.
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
        <a href="mailto:joe@jrm.dev"><code>joe@jrm.dev</code></a> or Tweet&nbsp;
        <a href="https://twitter.com/@joebobmiles"><code>@joebobmiles</code></a>.
      </p>
    </div>
  </Layout>
);