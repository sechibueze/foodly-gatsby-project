import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

import "../styles/pages/blog.scss"

const Blog = ({ data }) => {
  console.log("efrgrg", data)
  return (
    <Layout>
      <h1>Recent Blog Posts</h1>
      <div className="post-items-layout">
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const {
            id,
            timeToRead,
            frontmatter: { title, author, date, published },

            fields: { pageSlug },
          } = node
          return (
            <Link key={id} to={`/blog/${pageSlug}`} className="post-card">
              <h3 className="post-title"> {title} </h3>
              <div className="post-info">
                <span> {author} </span>
                <span> {date} </span>
                <span>
                  {" "}
                  {timeToRead} {`${timeToRead < 2 ? "min read" : "mins read"}`}{" "}
                </span>
                <span> {published ? ":)" : ":("} </span>
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog

export const GET_POSTS_QUERY = graphql`
  query posts {
    allMarkdownRemark {
      edges {
        node {
          fields {
            pageSlug
          }
          frontmatter {
            title
            author
            date
            published
          }
          timeToRead
          id
        }
      }
    }
  }
`
