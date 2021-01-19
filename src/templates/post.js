import React from "react";
import Image from "gatsby-image";
import Layout from "../components/Layout";
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text";

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
};


const Bold = ({ children }) => <span className="bold">{children}</span>;
const Text = ({ children }) => <p className="align-center">{children}</p>;


const post = ({ data }) => {
  const {
    contentfulPost: { mainImage, title, createdAt,text },
  } = data;


  return (
    <Layout>
      <section className="postPage">
        <div className="postPage-inner">
          <div className="postPage-context">
            <Image fluid={mainImage.fluid} className="postPage-image" />
            <h4 className="postPage-date">{createdAt}</h4>
            <h1 className="postPage-title">{title}</h1>
            <>
            {renderRichText(text, options)}
            </>
            </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query fetchPost($slug: String) {
    contentfulPost(slug: { eq: $slug }) {
      title
      text {
        raw
      }
      createdAt(formatString: "Do MMMM YYYY")
      mainImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

export default post;
