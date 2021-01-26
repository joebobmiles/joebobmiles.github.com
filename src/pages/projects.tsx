import * as React from "react";
import classnames from "classnames";

import Layout from "../components/Layout";
import {left,right} from "../components/Layout.module.scss";

import styles from "./projects.module.scss";

export default () =>
(
  <Layout>
    <h1 className={classnames(left, styles.text4X, styles.voiceHeading)}>
      Projects
    </h1>

    <br/>

    <main className={right}>
      // TODO
    </main>
  </Layout>
);