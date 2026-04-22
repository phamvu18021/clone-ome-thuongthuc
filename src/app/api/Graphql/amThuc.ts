import { gql } from "@apollo/client";

export const GET_SEO_AM_THUC = gql`
  query MyQuery {
    pageBy(uri: "am-thuc") {
      seo {
        fullHead
      }
    }
  }
`;
