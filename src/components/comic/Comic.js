import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import '../style/Characters.css'

import CharactersCards from './comicCards/CharactersCards'
import CreatorsCards from './comicCards/CreatorsCards'
import EventsCards from './comicCards/EventsCards'

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Comic = (props) => {

  const location = useLocation();

  // console.log("props: ", props)

  // console.log("location: ", location)

  const [comicInfo, setComicInfo] = useState([])
  const [image, setImage] = useState()
  const [extension, setExtension] = useState()
  const [price, setPrice] = useState()

  const [comicID, setComicID] = useState()

  const API_KEY = process.env.REACT_APP_API_KEY

  let {comic} = useParams()

  const comicDetail = async () => {

    const data = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${location.state.comicID}?apikey=${API_KEY}`)

    const details = await data.json();

    console.log("comic details:", details)

    setComicInfo(details.data.results[0])
    setImage(details.data.results[0].thumbnail.path)
    setExtension(details.data.results[0].thumbnail.extension)
    setPrice(details.data.results[0].prices[0].price)

    setComicID(details.data.results[0].id)
  }

  // console.log("comic ID: ", comicID)

  useEffect(() => {

    comicDetail();

  }, [])

  return (
    <>
        {/* <h1>Comic: {comic}</h1> */}
        {/* <h2>ComicID: {location.state.comicID}</h2> */}
      <br />
      <Container className='text-center bg-danger text-white'>
      
        <h1>COMIC INFO: </h1>
        
        {
          comicInfo === undefined
          ?
          ''
          :
          <div>
            <Row>
              <h1>{comicInfo.title}</h1>
              <p>Price: ${price}</p>
              <h2>Image</h2>
              <img alt='comic' src={`${image}.${extension}`} ></img>
            </Row>
          </div>
        }

        <br />

      </Container>

      <br /><br />

      <CharactersCards comicID={comicID} />
      <br />
      <CreatorsCards comicID={comicID} />
      <br />
      <EventsCards comicID={comicID} />
    </>
  )
}

export default Comic