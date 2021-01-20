import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
  return (
    <Helmet title={title} htmlAttributes={{ lang: "en" }}>
      <meta name="description" content="Dawid Stasiński personal blog"></meta>
    </Helmet>
  );
};

export default SEO;
