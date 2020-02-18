/*const path = require('path')

 module.exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/Blog.js')
    const res = await graphql(`
        query {
          allContentfulBlogPost {
            edges {
              node {
                slug
              }
            }
          }
        }
   `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/Blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
  }*/
const path = require("path");
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/Blog/index.js`);
  const bagTemplate = path.resolve('src/templates/Bag/index.js');

  const blogs = graphql(`
     {
       allMarkdownRemark {
         edges {
           node {
             frontmatter {
               slug
             }
           }
         }
       }
     }
   `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const { slug } = node.frontmatter;
        createPage({
          path: "/Blog/" + slug,
          component: postTemplate,
          context: {
            slug
          }
        });
      });

    });

    const bags = graphql(`
    {
      allBagsJson {
        edges {
          node {
            link
          }
        }
      }
    }
  `).then(result => {
     if (result.errors) {
       return Promise.reject(result.errors);
     }
     result.data.allBagsJson.edges.forEach(({ node }) => {
       const { link } = node;
       createPage({
         path: "/Bag/" + link,
         component: bagTemplate,
         context: {
           link
         }
       });
     });

   });


    return Promise.all([blogs, bags]);

};
