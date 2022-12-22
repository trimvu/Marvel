import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './CharactersResults.css'

const CharactersResults = () => {

    const API_KEY = process.env.REACT_APP_API_KEY

    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [characterList, setCharacterList] = useState([])

    let {search} = useParams();

    const characterListFetch = async () => {

        const data = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&orderBy=name&apikey=${API_KEY}`)

        const details = await data.json();

        console.log(details.data)

        setCharacterList(details.data.results)

    }

    useEffect(() => {

        characterListFetch();
    
      }, [])

  return (
    <>
        Characters Results: 

        {
            characterList.map(info => {
                return (
                    <ul key={info.id}>
                        <li>
                            <Link to={`/character/${info.name}`} className="">{info.name}</Link>
                            <br />
                            <img src={`${info.thumbnail.path}.jpg`} className="result-thumbnail"></img>
                        </li>
                    </ul>
                )

            })
        }
    </>
  )
}

export default CharactersResults