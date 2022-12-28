import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../style/Characters.css'

import CharactersCards from './seriesCards/CharactersCards'
import ComicCards from './seriesCards/ComicCards'
import EventsCards from './seriesCards/EventsCards'
import StoriesCards from './seriesCards/StoriesCards'

const Series = () => {

  const API_KEY = process.env.REACT_APP_API_KEY

  let {series} = useParams()

  const seriesDetail = async () => {

    const data = await fetch(`https://gateway.marvel.com:443/v1/public/series?title=${series}&apikey=${API_KEY}`)

    const details = await data.json()

    console.log("series details:", details)
  }

  useEffect(()=> {

    seriesDetail();

  }, [])
  
  return (
    <>
        <h1>Series: {series}</h1>
    </>
  )
}

export default Series