import React from "react";
import Layout from "../components/Layout";
import Image from "gatsby-image";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/SEO";

const about = ({ data }) => {
  const {
    file: { childrenImageSharp },
    contentfulAbout: {
      childContentfulAboutAboutTextNode: {
        childMdx: { body: text },
      },
    },
  } = data;
  const fixed = childrenImageSharp[0].fixed;
  return (
    <Layout>
      <SEO title="About | Dawid Stasiński" />
      <section className="about">
        <div className="about-inner">
          <Image className="about-image" fixed={fixed} />
          <div className="about-info">
            <h1>About Me</h1>
            <MDXRenderer>{text}</MDXRenderer>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    file(relativePath: { eq: "profilowe.png" }) {
      childrenImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    contentfulAbout {
      childContentfulAboutAboutTextNode {
        childMdx {
          body
        }
      }
    }
  }
`;

export default about;
