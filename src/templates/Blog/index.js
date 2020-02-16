import React from "react";
import { graphql } from "gatsby";
import styles from "./styles.module.css";
import Layout from "../../components/Layout/layout"
 
export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <>
    <Layout>
       <h1 style={{textAlign: 'center', marginTop: '-10px',opacity: '0.8'}}>{post.frontmatter.title}</h1>
      <hr style={{border: '0.3px solid black',opacity: '0.8', marginTop: '-10px'}} />
      <section
        className={styles.Post}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      </Layout>
    </>
  );
};
 export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark( frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date  
        slug
        title
      }
    }
  }
`;