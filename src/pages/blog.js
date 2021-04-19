import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"

import "../styles/pages/blog.scss"
const GET_POSTS_QUERY = graphql`
  query posts {
    allMarkdownRemark {
      nodes {
        excerpt(format: PLAIN, pruneLength: 140, truncate: true)
        id
        frontmatter {
          title
          author
          date
          published
        }
        timeToRead
      }
    }
  }
`
const Blog = () => {
  const data = useStaticQuery(GET_POSTS_QUERY)
  return (
    <Layout>
      <h1>Recent Blog Posts</h1>
      {data.allMarkdownRemark.nodes.map(post => {
        const {
          id,
          timeToRead,
          excerpt,
          frontmatter: { title, author, date },
          published,
        } = post
        return (
          <div key={id} className="post-card">
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
            <article> {excerpt} </article>
          </div>
        )
      })}
    </Layout>
  )
}

export default Blog
