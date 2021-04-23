import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from "../../components/Layout"
const BlogTemplate = ({ data }) => {
  const { title, postContent } = data.contentfulPost
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        // render the EMBEDDED_ASSET as you need
        if (node.data.target.file) {
          return (
            <img
              src={`https://${node.data.target.file.url}`}
              height={200}
              width={400}
              alt={"A display just embedded finally"}
            />
          )
        }
      },
    },
  }
  return (
    <Layout>
      <>
        <h1> {title} </h1>
        {postContent && renderRichText(postContent, options)}
      </>
    </Layout>
  )
}

export default BlogTemplate

export const POST_QUERY = graphql`
  query Q($id: String!) {
    contentfulPost(id: { eq: $id }) {
      id
      postContent {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            file {
              url
              details {
                size
                image {
                  width
                  height
                }
                __typename
              }
            }
          }
        }
      }
    }
  }
`
