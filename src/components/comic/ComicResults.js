import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../style/CharactersResults.css'

const ComicResults = () => {

  const API_KEY = process.env.REACT_APP_API_KEY

  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [comicList, setComicList] = useState([])

  let {search} = useParams();

  const comicListFetch = async () => {

      const data = await fetch(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${search}&apikey=${API_KEY}&limit=99`)

      const details = await data.json();

      console.log(details.data)

      setComicList(details.data.results)

  }

  useEffect(() => {

      comicListFetch();
  
    }, [])

  return (
    <>
      Comic Results: 

      {
          comicList.map(info => {
              return (
                  <ul key={info.id}>
                      <li>
                          <Link to={`/comic/${info.title}`} className="">{info.title}</Link>
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

export default ComicResults