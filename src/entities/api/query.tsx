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

const GET_ALL_CHARACTERS = (page: string, filter: {name: string, value: string }[]): TypedDocumentNode =>  gql`
    query GetCharacters {
        characters (page: ${page}, filter: {${filter.map(f => `${f.name}: "${f.value}"`).join(' ,')}}) {
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

const GET_CHARACTERS_BY_ID = (arr: Array<number>) => {
    console.log(arr);
    console.log(arr.join(','));
    return gql`
        {
            charactersByIds (ids: [${arr.join(',')}]) {
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




export {GET_ALL_EPISODES, GET_EPISODE, GET_ALL_CHARACTERS, GET_CHARACTER, GET_INFO_PAGE, GET_CHARACTERS_BY_ID};
