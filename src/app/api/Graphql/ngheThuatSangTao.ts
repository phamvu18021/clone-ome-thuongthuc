import { gql } from "@apollo/client";

export const GET_SEO_NGHE_THUAT_SANG_TAO = gql`
  query MyQuery {
    pageBy(uri: "nghe-thuat-sang-tao") {
      seo {
        fullHead
      }
    }
  }
`;
