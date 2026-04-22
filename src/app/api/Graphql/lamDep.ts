import { gql } from "@apollo/client";

export const GET_SEO_LAM_DEP = gql`
  query MyQuery {
    pageBy(uri: "lam-dep") {
      seo {
        fullHead
      }
    }
  }
`;
