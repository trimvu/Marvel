import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../style/CharactersResults.css'

const CreatorsResults = () => {

  const API_KEY = process.env.REACT_APP_API_KEY
  
  const [creatorsList, setCreatorsList] = useState([])

  let {search} = useParams();

  const creatorsListFetch = async () => {

    const data = await fetch(`https://gateway.marvel.com:443/v1/public/creators?nameStartsWith=${search}&apikey=${API_KEY}&limit=99`)

    const details = await data.json();

    console.log("creator details: ", details)

    setCreatorsList(details.data.results)

  }

  useEffect(() => {

    creatorsListFetch();

  }, [])

  return (
    <>
        Creators Results: 

        {
          creatorsList.map(info => {
              return (
                  <ul key={info.id}>
                      <li>
                          <Link to={`/creators/${info.fullName}`} className="">{info.fullName}</Link>
                          <br />
                          <img alt='Creator' src={`${info.thumbnail.path}.jpg`} className="result-thumbnail"></img>
                      </li>
                  </ul>
              )
          })
        }
    </>
  )
}

export default CreatorsResults