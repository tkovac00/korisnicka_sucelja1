import React from "react"
import Layout from "../components/Layout/layout"
import { Link, graphql } from "gatsby"
import Head from "../components/head"

const BlogPage = ({data}) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  return(
 <Layout>
   <Head title="Blog" />
      <h1 >Blog</h1>
      <ol>
        {blogPosts.map(({node}) => (
          <li>
            <Link to={`/Blog/${node.slug}`}>
            <h2>{node.title}</h2>
            <p>{node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
   </Layout> 
  )
}
  export default BlogPage;

  export const query = graphql`
  query posts {
      allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
  }
  
  `;
 
  