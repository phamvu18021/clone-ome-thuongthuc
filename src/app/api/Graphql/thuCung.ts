import { gql } from "@apollo/client";

export const GET_SEO_THU_CUNG = gql`
  query MyQuery {
    pageBy(uri: "thu-cung") {
      seo {
        fullHead
      }
    }
  }
`;
