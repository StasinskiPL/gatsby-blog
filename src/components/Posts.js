import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Aside from "./Aside"
import Post from "./Post";

const Posts = () => {
  const {allContentfulPost:{nodes:posts}} = useStaticQuery(query);
  return (
    <section className="posts">
      <div className="posts-inner">
          <div className="posts-list-wrapper">
          {posts.map((post,index)=><Post key={index} post={post}/>)}
          </div>
          <Aside/>
          
      </div>
    </section>
  );
};

const query = graphql`
  {
    allContentfulPost(sort: {fields: createdAt, order: DESC}){
      nodes {
        slug
        title
        description {
          childMdx {
            excerpt
          }
        }
        createdAt(formatString: "Do MMMM YYYY")
        mainImage {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;

export default Posts;
