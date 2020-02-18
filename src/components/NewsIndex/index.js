import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';


 export default ({ posts }) => {
  const postsList = posts.map(post => {
    const { id, excerpt } = post.node;
    const { title, slug,date,permalink} = post.node.frontmatter;
    return (
      <Link className={styles.link} to={`Blog/${slug}`}>
      <section  key={id} className={styles.Post}>
        <LazyLoadImage className={styles.image} src = {permalink} alt = '' effect = 'blur' className = {styles.newsThumb}></LazyLoadImage>
        <div className={styles.newsContainer} >
          <h2  className={styles.Title}>
            {title}
          </h2>
          <p className={styles.Excerpt}>{excerpt}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </section>
      </Link>
    );
  });
  return postsList;
};
