import { FC, useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import CharacterInfo from 'entities/ui/CharacterInfo'

import './styles/style.css'
import { GetCharacterByID } from 'entities/api'
import Loader from 'shared/ui/Loader'
import ErrorMessage from 'shared/ui/ErrorMessage/ErrorMessage'
import { ICharacter } from 'entities/types/types'

const Character: FC = () => {
    let { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [characterData, setCharacterData] = useState({})
    useEffect(() => {
        setIsLoading(true)
        const asyncFetch = async () => {
            const { error, data } = await GetCharacterByID(id as string)
            if (error) {
                setError(error.message)
                return
            }
            setCharacterData(data?.character)
            setIsLoading(false)
        }
        asyncFetch()
    }, [id])

    return (
        <div className="page">
            {isLoading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {characterData && (
                <CharacterInfo characterData={characterData as ICharacter} />
            )}
        </div>
    )
}

export default Character
