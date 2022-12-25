import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import './style/Characters.css'

import ComicCards from '../cards/ComicCards'
import EventsCards from '../cards/EventsCards'
import SeriesCards from '../cards/SeriesCards'
import StoriesCards from '../cards/StoriesCards'

const Characters = () => {
  
  const API_KEY = process.env.REACT_APP_API_KEY

  const [characterInfo, setCharacterInfo] = useState()
  const [availableSeries, setAvailableSeries] = useState()
  const [image, setImage] = useState()
  const [description, setDescription] = useState()

  const [characterID, setCharacterID] = useState()

  const [additionalInfo, setAdditionalInfo] = useState()

  const dispatch = useDispatch();
  
  let {character} = useParams()

  const characterDetail = async () => {

    const data = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${character}&orderBy=name&apikey=${API_KEY}`);

    const details = await data.json(); 

    setCharacterInfo(details.data.results[0]);
    setAvailableSeries(details.data.results[0].series.available)
    setDescription(details.description)
    setImage(details.data.results[0].thumbnail.path)
    setCharacterID(details.data.results[0].id)
    
    setAdditionalInfo(details.data.results[0].urls[0].url)

  }

  console.log("characterID", characterID)

  useEffect(() => {

    characterDetail();

  }, [characterID])

  return (
    <>
        <h1>Character Info: {character}</h1>

        {
          characterInfo === undefined
          ?
          ''
          :
          <div>
            <h1>{characterInfo.name}</h1>
            <p>{characterInfo.description}</p>
            <h2>Image</h2>
            <img src={`${image}.jpg`} ></img>
          </div>
        }

        <br /><br />

        {availableSeries} 

        //! COMIC
        <ComicCards characterID={characterID} />

        //! EVENTS
        <EventsCards characterID={characterID} />

        //! SERIES
        <SeriesCards characterID={characterID} />

        //! STORIES
        <StoriesCards characterID={characterID} />

        <div>
          <h2>
            <a href={additionalInfo} target="_blank">
              Additional Information
            </a>
          </h2>
        </div>

    </>
  )
}

export default Characters