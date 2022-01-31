import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        image
        name
        status
        species
        location {
          name
        }
        origin {
          name
        }
      }
    }
  }
`;

export const useCharacters = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);

  return {
    error,
    data,
    loading,
  };
};
