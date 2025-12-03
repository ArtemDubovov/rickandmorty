import { gql, TypedDocumentNode } from "@apollo/client";

const GET_ALL_EPISODES = (): TypedDocumentNode => gql`
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

const GET_EPISODE = (id: string): TypedDocumentNode => gql`
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

const GET_ALL_CHARACTERS = (page: string): TypedDocumentNode =>  gql`
    query GetCharacters {
        characters (page: ${page}) {
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


const GET_CHARACTER = (id: string): TypedDocumentNode => gql`
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

const GET_INFO_PAGE = () => {
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



export {GET_ALL_EPISODES, GET_EPISODE, GET_ALL_CHARACTERS, GET_CHARACTER, GET_INFO_PAGE};
