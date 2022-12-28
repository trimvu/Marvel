import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../style/Characters.css'

// import CharactersCards from './storiesCards/CharactersCards'
// import ComicCards from './storiesCards/ComicCards'
// import EventsCards from './storiesCards/EventsCards'
// import SeriesCards from './storiesCards/SeriesCards'

const Stories = (props) => {

  const location = useLocation();

  // console.log("props: ", props)

  console.log("location: ", location)

  const [storiesInfo, setStoriesInfo] = useState([])

  const API_KEY = process.env.REACT_APP_API_KEY

  let {stories} = useParams()

  const storiesDetail = async () => {

    const data = await fetch(`https://gateway.marvel.com:443/v1/public/stories/${location.state.storiesID}?apikey=${API_KEY}`)

    const details = await data.json();

    console.log("stories details: ", details)

    setStoriesInfo(details.data.results[0])

  }

  useEffect(() => {

    storiesDetail();

  }, [])

  return (
    <>
        <h1>Stories: {stories}</h1>
        <h2>StoriesID: {location.state.storiesID}</h2>

        {
          storiesInfo === undefined
          ?
          ''
          :
          <h1>{storiesInfo.title}</h1>
        }
    </>
  )
}

export default Stories