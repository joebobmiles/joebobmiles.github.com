import * as React from "react";
import classnames from "classnames";

import "@styles/global";
import styles from "./index.module.scss";

export default () =>
(
  <main className={styles.container}>
    <header className={styles.header}>
      <h1 className={classnames(styles.text5X, styles.fontBlack)}>
        <a href="/">JRM.DEV</a>
      </h1>
    </header>
    <main className={styles.main}>
      <h1 className={classnames(styles.left, styles.text4X)}>👋 Howdy!</h1>

      <br/>

      <h2 className={classnames(styles.right, styles.textXl)}>
        My name is <a href="/about/">Joseph R Miles</a>.
        <br/>
        Your friendly neighborhood hacker 👨‍💻.
      </h2>

      <div className={classnames(styles.right, styles.prose)}>
        <p>
          This is my own little corner of the Internet 🌎, where I&nbsp;
          <a href="/posts/">learn in public</a> and keep a&nbsp;
          <a href="/projects/">directory of my work</a>.
        </p>
        <p>
          Want to get in touch? Send an email to&nbsp;
          <a href="mailto:joe@jrm.dev"><code>joe@jrm.dev</code></a> or Tweet&nbsp;
          <a href="https://twitter.com/@joebobmiles"><code>@joebobmiles</code></a>.
        </p>
      </div>
    </main>
    <footer className={styles.footer}>
      <p>&copy; 2020 &ndash; 2021 JRM.DEV</p>
    </footer>
  </main>
);