import { ApolloClient, HttpLink, InMemoryCache, TypedDocumentNode } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { URL } from "./const";
import useStoreApp from "../../App/providers/store";

const client = new ApolloClient({
  link: new HttpLink({ uri: URL }),
  cache: new InMemoryCache(),
});

function useFetch(query: TypedDocumentNode) {
    const {loading, error, data} = useQuery(query);
    return {loading, error, data};
}

export {useFetch, client};
