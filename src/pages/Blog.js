import React from "react";
import { graphql } from "gatsby";
import { NewsIndex } from "../components";
import { Banner} from "../components";
import Layout from "../components/Layout/layout"
 
 export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to posts
  }
}) => {
  return (
    <>
    <Layout>
      <h1 style={{textAlign: 'center', marginTop: '-10px',opacity: '0.8'}}>Blog</h1>
      <hr style={{border: '0.3px solid black',opacity: '0.8', marginTop: '0px'}} />
      <NewsIndex posts={posts} />
      </Layout>
    </>
    
  );
};
 export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
            permalink
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;