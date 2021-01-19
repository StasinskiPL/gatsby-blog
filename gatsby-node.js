const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allContentfulPost {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.allContentfulPost.nodes.forEach(({ slug }) => {
    createPage({
      path: `/${slug}`,
      component: path.resolve("src/templates/post.js"),
      context: {
        slug,
      },
    });
  });
};
