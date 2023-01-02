import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../style/CharactersResults.css'

const StoriesResults = () => {

  const API_KEY = process.env.REACT_APP_API_KEY

  const [storiesList, setStoriesList] = useState([])

  let {search} = useParams();

  const storiesListFetch = async () => {

    const data = await fetch(`${API_KEY}&list=99`)

    const details = await data.json();

    console.log(details.data)

    setStoriesList(details.data.results)

  }

  useEffect(() => {

    storiesListFetch();

  }, [])

  return (
    <>
        Stories Results:

        {
          storiesList.map(info => {
            return (
              <ul key={info.id}>
                <li>
                  <Link to={`/stories/${info.title}`} className="">{info.title}</Link>
                  <br />
                  <img alt='Story' src={`${info.thumbnail.path}.jpg`} className="result-thumbnail"></img>
                </li>
              </ul>
            )
          })
        }
    </>
  )
}

export default StoriesResults