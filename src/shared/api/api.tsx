import { ApolloClient, HttpLink, InMemoryCache, TypedDocumentNode } from "@apollo/client";
import { URL } from "./const";

const client = new ApolloClient({
  link: new HttpLink({ uri: URL }),
  cache: new InMemoryCache(),
});

async function fetchAPI(query: TypedDocumentNode) {
    const {error, data} = await client.query({query: query}); // Найти замену useQuery
    return { error, data};
}

export {fetchAPI, client};
