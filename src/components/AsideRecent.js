import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Image from "gatsby-image";

const AsideRecent = () => {
  const {
    allContentfulPost: { nodes: posts },
  } = useStaticQuery(query);
  return (
    <article className="aside-recent">
      <h3>Recent Post</h3>
      {posts.map((post, index) => {
        const {
          title,
          slug,
          createdAt,
          mainImage: { fixed },
        } = post;
        return (
          <Link to={`/${slug}`} key={index} className="aside-recent-post">
            <Image fixed={fixed} className="aside-recent-post-img" />
            <div className="aside-recent-post-info">
              <h4>{title}</h4>
              <p>{createdAt}</p>
            </div>
          </Link>
        );
      })}
    </article>
  );
};

const query = graphql`
  {
    allContentfulPost(limit: 3, sort: { fields: createdAt, order: DESC }) {
      nodes {
        title
        slug
        createdAt(formatString: "DD.MM.YYYY")
        mainImage {
          fixed(width: 65, height: 65) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
    }
  }
`;

export default AsideRecent;
