import { ApolloClient, HttpLink, InMemoryCache, TypedDocumentNode } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { URL } from "./const";

const client = new ApolloClient({
  link: new HttpLink({ uri: URL }),
  cache: new InMemoryCache(),
});

function useFetch(query: TypedDocumentNode) {
    const {loading, error, data} = useQuery(query);
    console.log(data);
    const info = data?.characters.info;
    const result = data?.characters.results;
    return {loading, error, info, result};
}

export {useFetch, client};
