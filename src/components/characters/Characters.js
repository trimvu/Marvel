import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import '../style/Characters.css'

import ComicCards from './characterCards/ComicCards'
import EventsCards from './characterCards/EventsCards'
import SeriesCards from './characterCards/SeriesCards'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

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

  }, [characterID, image])

  return (
    <>
      <Container className='text-center bg-danger text-white'>
        <h1>CHARACTER INFO: </h1>

        {
          characterInfo === undefined
          ?
          ''
          :
          <div>
            <Row>
            <h1>{characterInfo.name}</h1>
            <p>{characterInfo.description}</p>
            <img src={`${image}.jpg`} ></img>
            </Row>
          </div>
        }

      </Container>

        <br /><br />

        <ComicCards characterID={characterID} />
        <br />
        <EventsCards characterID={characterID} />
        <br />
        <SeriesCards characterID={characterID} />

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