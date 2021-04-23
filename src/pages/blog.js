import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

import "../styles/pages/blog.scss"

const Blog = ({ data }) => {
  return (
    <Layout>
      <h1>Recent Blog Posts</h1>
      <div className="post-items-layout">
        {data.allContentfulPost.edges.map(({ node }) => {
          const {
            id,
            title,
            excerpt,
            isPublished,
            publishedDate,
            postImage: {
              fluid: { src },
            },
            creator: { name },
          } = node
          return (
            <Link key={id} to={`/blog/${id}`} className="post-card">
              <img
                src={src}
                alt={title}
                style={{ width: "60px", height: "60px" }}
              />
              <h3 className="post-title"> {title} </h3>
              <p>{excerpt} </p>
              <div className="post-info">
                <span> {name} </span>
                <span> {publishedDate} </span>

                <span> {isPublished ? ":)" : ":("} </span>
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog

export const GET_POST_ITEMS_QUERY = graphql`
  query MyQuery {
    allContentfulPost {
      edges {
        node {
          id
          isPublished
          excerpt
          slug
          title
          publishedDate(formatString: "MMMM Do, YYYY")
          postImage {
            fluid {
              src
            }
          }
          creator {
            name
          }
        }
      }
    }
  }
`
