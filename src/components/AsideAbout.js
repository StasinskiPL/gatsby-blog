import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

const AsideAbout = () => {
  const {
    file: { childrenImageSharp },
  } = useStaticQuery(query);
  const fixed = childrenImageSharp[0].fixed;
  return (
    <article className="aside-about">
        <h3>About Me</h3>
      <Image fixed={fixed} className="aside-about-image" />
      <p>
        Would you like to know more about me? Check out my{" "}
        <Link to="/about">About Page.</Link>
      </p>
    </article>
  );
};

const query = graphql`
  {
    file(relativePath: { eq: "profilowe.png" }) {
      childrenImageSharp {
        fixed(width: 95, height: 95) {

          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default AsideAbout;
