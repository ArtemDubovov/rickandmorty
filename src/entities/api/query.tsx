import { gql, TypedDocumentNode } from "@apollo/client";

const GET_ALL_EPISODES_QUERY = (): TypedDocumentNode => gql`
    query GetEpisodes {
        episodes {
            info {
                count
            }
            results {
                name
            }
        }
    }
`;

const GET_EPISODE_QUERY = (id: string): TypedDocumentNode => gql`
    query GetEpisodeByID {
        episodesByIds(ids: ${id}) {
            characters {
                id
            }
            id
            name
            air_date
            episode
            created
        }
    }
`

const GET_ALL_CHARACTERS_QUERY = (page: string, filter?: {name: string, value: string }[]): TypedDocumentNode =>  gql`
    query GetCharacters {
        characters (page: ${page}, filter: {${filter ? filter?.map(f => `${f.name}: "${f.value}"`).join(' ,') : ''}}) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                image
            }
        }
    }
`


const GET_CHARACTER_QUERY = (id: string): TypedDocumentNode => gql`
    query GetCharacterByID {
        character (id: ${id}) {
            id
            name
            species
            gender
            status
            created
            origin {
                id
            }
            location {
                id
                name
            }
            image
            episode {
                id
            }
        }
    } 
`

const GET_INFO_PAGE_QUERY = () => {
    return gql`
        {
            characters (page: 0) {
                info {
                    pages
                }
            }
        }
    `
}

const GET_CHARACTERS_BY_ID_QUERY = (arr: Array<number>) => {
    return gql`
        {
            charactersByIds (ids: [${arr.length ? arr.join(',') : '-1'}]) {
                id
                name
                species
                gender
                status
                created
                origin {
                    id
                }
                location {
                    id
                    name
                }
                image
                episode {
                    id
                }
            }
        }
    `
}




export {GET_ALL_EPISODES_QUERY, GET_EPISODE_QUERY, GET_ALL_CHARACTERS_QUERY, GET_CHARACTER_QUERY, GET_INFO_PAGE_QUERY, GET_CHARACTERS_BY_ID_QUERY};
