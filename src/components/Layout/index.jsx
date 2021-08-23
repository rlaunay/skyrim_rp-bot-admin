import React from "react";
import Header from "./Header";

import classes from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
