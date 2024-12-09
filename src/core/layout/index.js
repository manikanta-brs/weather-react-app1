import React from "react";
// import { Link } from "react-router-dom";

export const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <main role="main" className="container pt-5">
        {children}
      </main>
    </>
  );
};
