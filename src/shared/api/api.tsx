import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    TypedDocumentNode,
} from '@apollo/client'

const client = new ApolloClient({
    link: new HttpLink({ uri: process.env.REACT_APP_API_URL }),
    cache: new InMemoryCache(),
})

async function fetchAPI(query: TypedDocumentNode) {
    const { error, data } = await client.query({ query: query })
    return { error, data }
}

export { fetchAPI, client }
