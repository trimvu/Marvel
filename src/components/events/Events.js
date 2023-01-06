import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../style/Characters.css'

import CharactersCards from './eventsCards/CharactersCards'
import ComicCards from './eventsCards/ComicCards'
import CreatorsCards from './eventsCards/CreatorsCards'
import SeriesCards from './eventsCards/SeriesCards'

const Events = (props) => {

  const location = useLocation();

  console.log("props: ", props)

  console.log("location: ", location)

  const [eventsInfo, setEventsInfo] = useState([])
  const [image, setImage] = useState()
  const [description, setDescription] = useState()

  const [eventsID, setEventsID] = useState()

  const API_KEY = process.env.REACT_APP_API_KEY

  let {events} = useParams()

  const eventsDetail = async () => {

    const data = await fetch(`https://gateway.marvel.com:443/v1/public/events/${location.state.eventsID}?apikey=${API_KEY}`)

    const details = await data.json();

    console.log("events details: ", details)

    setEventsInfo(details.data.results[0])
    setImage(details.data.results[0].thumbnail.path)
    setDescription(details.data.results[0].description)

    setEventsID(details.data.results[0].id)

  }

  useEffect(() => {

    eventsDetail();

  }, [])

  return (
    <>
        <h1>Events: {events}</h1>
        <h2>EventsID: {location.state.eventsID}</h2>

        {
          eventsInfo === undefined
          ?
          ''
          :
          <div>
            <h1>{eventsInfo.title}</h1>
            <p>{description}</p>
            <img src={`${image}.jpg`} ></img>
          </div>

        }

        <CharactersCards eventsID={eventsID} />
        <br />
        <ComicCards eventsID={eventsID} />
        <br />
        <CreatorsCards eventsID={eventsID} />
        <br />
        <SeriesCards eventsID={eventsID} />

    </>
  )
}

export default Events