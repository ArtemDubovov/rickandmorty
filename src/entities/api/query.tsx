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

const GET_EPISODE = (id: number): TypedDocumentNode => gql`
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

const GET_ALL_CHARACTERS = (): TypedDocumentNode =>  gql`
    query GetCharacters {
        characters {
            info {
            count
            pages
            next
            prev
            }
            results {
                id
                name
                status
                species
                image
                gender
                created
                episode {
                    id
                    name
                }
                origin {
                    name
                }
                location {
                    name
                }
            }
        }
    }
`


const GET_CHARACTER = (id: number): TypedDocumentNode => gql`
    query GetCharacterByID {
        character (id: 1) {
            id
            name
            species
            gender
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



export {GET_ALL_EPISODES, GET_EPISODE, GET_ALL_CHARACTERS, GET_CHARACTER};
