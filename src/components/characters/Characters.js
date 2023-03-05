import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
import '../style/Characters.css'

import ComicCards from './characterCards/ComicCards'
import EventsCards from './characterCards/EventsCards'
import SeriesCards from './characterCards/SeriesCards'

import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import allActions from '../../actions'
import FavoritesButton from '../FavoritesButton'

const Characters = () => {
  
  const API_KEY = process.env.REACT_APP_API_KEY

  const [characterInfo, setCharacterInfo] = useState()
  // const [availableSeries, setAvailableSeries] = useState()
  const [image, setImage] = useState()
  // const [description, setDescription] = useState()
  const [extension, setExtension] = useState()
  const [charName, setCharName] = useState('')

  const [characterID, setCharacterID] = useState()

  const [additionalInfo, setAdditionalInfo] = useState()

  const category = 'character'

  // const dispatch = useDispatch();
  
  // const uhh = useSelector(state => state.favorite.favorites)

  // console.log("uhh", uhh)
  
  let {character} = useParams()

  const characterDetail = async () => {

    const data = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${character}&orderBy=name&apikey=${API_KEY}`);

    const details = await data.json(); 

    // console.log(details)

    setCharacterInfo(details.data.results[0]);
    // setAvailableSeries(details.data.results[0].series.available)
    // setDescription(details.description)
    setImage(details.data.results[0].thumbnail.path)
    setExtension(details.data.results[0].thumbnail.extension)
    setCharacterID(details.data.results[0].id)
    
    setAdditionalInfo(details.data.results[0].urls[0].url)
    setCharName(details.data.results[0].name)

  }
  
  // const handleFavorite = () => {
    
  //   dispatch(allActions.addFavoriteAction(characterInfo.name, image, category, characterID))

  // }

  // const handleUnfavorite = () => {

  //   dispatch(allActions.deleteFavoriteAction(filtered[0].id))
    
  // }

  // console.log("characterID", characterID)

  useEffect(() => {

    characterDetail();

  }, [characterID, image])

  // const filtered = uhh.filter(e => (e.marvelID === characterID))

  // console.log("filtered", filtered)

  return (
    <>
      <br />
      <Container className='text-center bg-danger text-white'>

        {/* {
          filtered.length > 0
          ?
          <button onClick={handleUnfavorite}>UNFAVORITE</button>
          :
          <button onClick={handleFavorite}>FAVORITE</button>

        } */}

        <FavoritesButton name={charName} image={image} category={category} marvelID={characterID} />

        {/* <button onClick={handleFavorite}>FAVORITE</button> */}

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
              <img alt='character' src={`${image}.${extension}`} id='img-size'></img>
            </Row>
          </div>
        }

        <br />

      </Container>

        <br /><br />

        <ComicCards characterID={characterID} />
        <br />
        <EventsCards characterID={characterID} />
        <br />
        <SeriesCards characterID={characterID} />

        <div className='center-text'>
          <h2>
            <a href={additionalInfo} target="_blank" rel='noreferrer'>
              Additional Information
            </a>
          </h2>
        </div>

    </>
  )
}

export default Characters