import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/layout";

export default ({ data }) => {
  const { bagsJson: bag } = data;
  return (
    <>
    <Layout>
      <h1 style={{ textAlign: 'center', marginTop: '-10px', opacity: '0.8' }}>{bag.id}</h1>
      <hr style={{ border: '0.3px solid black', opacity: '0.8', marginTop: '-10px' }} />
      <p>{bag.price}</p>
    </Layout>
    </>
  );
};
export const query = graphql`
 query bagsQuery($link: String!) {
  bagsJson( link: { eq: $link }) {
    id
    price
    image {
      src
    }
  }
}
`;