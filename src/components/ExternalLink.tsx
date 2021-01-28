import * as React from "react";

export default ({ to, children }) =>
(
  <a
    href={to}
    target="_blank"
    rel="external noreferrer nofollow noopener"
  >
    {children}
  </a>
);