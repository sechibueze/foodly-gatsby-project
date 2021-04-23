/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
/** Not required for contentful */
// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions
//   // Select/Filter the markdown files
//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "pageSlug",
//       value: slug,
//     })
//   }
// }

module.exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  // Get path to page template
  const blogPageTemplate = path.resolve("./src/templates/BlogTemplate/index.js")
  // Fetch page Ids
  const result = await graphql(`
    query ContentfulPostSlugs {
      allContentfulPost {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create page dynamically based on slug
  result.data.allContentfulPost.edges.forEach(({ node }) => {
    // // format the slug
    // const slug = node.title
    //   .toLowerCase()
    //   .trim()
    //   .replace(/\s+/g, "-")
    //   .concat(`-${node.id}`)
    // console.log("@@@@@@@@@@@@@@@@@@@@@@@", slug)
    createPage({
      component: blogPageTemplate,
      path: `/blog/${node.id}`,
      context: {
        id: node.id,
      },
    })
  })
}
