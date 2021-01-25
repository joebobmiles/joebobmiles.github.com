import React from "react"
import classnames from "classnames";

import Layout from "../components/Layout"
import { left, right } from "../components/Layout.module.scss";
import styles from "./404.module.scss";

const NotFoundPage = () => (
  <Layout>
    <h1 className={classnames(left, styles.text3X, styles.voiceHeading)}>
      🤖 404
    </h1>

    <br/>

    <p className={classnames(right, styles.textLg)}>
      That's an error! 😱
    </p>
  </Layout>
)

export default NotFoundPage