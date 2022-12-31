import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../style/CharactersResults.css'

const SeriesResults = () => {

  const API_KEY = process.env.REACT_APP_API_KEY

  const [eventsList, setEventsList] = useState([])
  
  let {search} = useParams();

  const seriesListFetch = async () => {

    const data = await fetch(`https://gateway.marvel.com:443/v1/public/series?titleStartsWith=${search}&apikey=${API_KEY}&limit=99`)

    const details = await data.json();

    console.log(details.data)

    setEventsList(details.data.results)

  }

  useEffect(() => {

    seriesListFetch();

  }, [])

  return (
    <>
        Series Results:

        {
          eventsList.map(info => {
            return (
              <ul key={info.id}>
                <li>
                  <Link to={`/events/${info.title}`} className="">{info.title}</Link>
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

export default SeriesResults