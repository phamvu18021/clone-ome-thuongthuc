import { gql } from "@apollo/client";

export const GET_SEO_CHAM_SOC_NHA_CUA = gql`
  query MyQuery {
    pageBy(uri: "cham-soc-nha-cua") {
      seo {
        fullHead
      }
    }
  }
`;
