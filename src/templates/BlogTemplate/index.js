import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
const BlogTemplate = ({ data }) => {
  return (
    <Layout>
      <>
        <h1> {data.markdownRemark.frontmatter.title} </h1>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </>
    </Layout>
  )
}

export default BlogTemplate

export const POST_QUERY = graphql`
  query postQuery($pageSlug: String!) {
    markdownRemark(fields: { pageSlug: { eq: $pageSlug } }) {
      frontmatter {
        author
        date
        published
        title
      }
      html
    }
  }
`
