import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../style/Characters.css'

import ComicCards from './creatorsCards/ComicCards'
import EventsCards from './creatorsCards/EventsCards'
import SeriesCards from './creatorsCards/SeriesCards'

const Creators = (props) => {

  const location = useLocation();

  console.log("props: ", props)

  console.log("location: ", location)

  const [creatorsInfo, setCreatorsInfo] = useState([])
  const [image, setImage] = useState()
  // const [description, setDescription] = useState()

  const [creatorsID, setCreatorsID] = useState()

  const API_KEY = process.env.REACT_APP_API_KEY

  let {creators} = useParams()

  const creatorsDetail = async () => {

    const data = await fetch(`https://gateway.marvel.com:443/v1/public/creators/${location.state.creatorsID}?apikey=${API_KEY}`)

    const details = await data.json();

    console.log("creators details: ", details)

    setCreatorsInfo(details.data.results[0])
    setImage(details.data.results[0].thumbnail.path)
    // setDescription(details.data.results[0].description)

    setCreatorsID(details.data.results[0].id)

  }

  console.log("creators id: ", creatorsID)

  useEffect(() => {

    creatorsDetail();

  }, [])

  return (
    <>
        <h1>Creators: {creators}</h1>
        <h2>CreatorsID: {location.state.creatorsID}</h2>

        {
          creatorsInfo === undefined
          ?
          ''
          :
          <div>
            <h1>{creatorsInfo.fullName}</h1>
            {/* <p>{description}</p> */}
            <img src={`${image}.jpg`} ></img>  
          </div>

        }

        <ComicCards creatorsID={creatorsID} />
        <br />
        <EventsCards creatorsID={creatorsID} />
        <br />
        <SeriesCards creatorsID={creatorsID} />
    </>
  )
}

export default Creators