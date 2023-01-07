import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import '../style/Characters.css'

import CharactersCards from './seriesCards/CharactersCards'
import ComicCards from './seriesCards/ComicCards'
import CreatorsCards from './seriesCards/CreatorsCards'
import EventsCards from './seriesCards/EventsCards'

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Series = (props) => {

  const location = useLocation();

  // console.log("props: ", props)

  // console.log("location: ", location)

  const [seriesInfo, setSeriesInfo] = useState([])
  const [image, setImage] = useState()
  const [rating, setRating] = useState()

  const [seriesID, setSeriesID] = useState()

  const API_KEY = process.env.REACT_APP_API_KEY

  let {series} = useParams()

  const seriesDetail = async () => {

    const data = await fetch(`https://gateway.marvel.com:443/v1/public/series/${location.state.seriesID}?apikey=${API_KEY}`)

    const details = await data.json()

    // console.log("series details:", details)

    setSeriesInfo(details.data.results[0])
    setImage(details.data.results[0].thumbnail.path)
    setRating(details.data.results[0].rating)

    setSeriesID(details.data.results[0].id)
    
  }

  useEffect(()=> {

    seriesDetail();

  }, [])
  
  return (
    <>
        {/* <h1>Series: {series}</h1>
        <h2>{location.state.seriesID}</h2> */}

        <Container className='text-center bg-danger text-white'>

          <h1>SERIE INFO: </h1>

          {
            seriesInfo === undefined
            ?
            ''
            :
            <div>
              <Row>
                <h1>{seriesInfo.title}</h1>
                <p>Rating: {rating}</p>
                <h2>Image</h2>
                <img alt='serie' src={`${image}.jpg`} ></img>
              </Row>
            </div>
          }

        </Container>

        <br /><br />

        <CharactersCards seriesID={seriesID} />
        <br />
        <ComicCards seriesID={seriesID} />
        <br />
        <CreatorsCards seriesID={seriesID} />
        <br />
        <EventsCards seriesID={seriesID} />
    </>
  )
}

export default Series