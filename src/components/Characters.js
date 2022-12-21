import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Characters = () => {
  
  const API_KEY = process.env.REACT_APP_API_KEY

  const [characterInfo, setCharacterInfo] = useState()
  
  let {character} = useParams()
  
  // console.log("character is: " + character)

  const characterDetail = async () => {


    const data = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${character}&orderBy=name&apikey=${API_KEY}`);

    const details = await data.json(); 

    // console.log("the details: ", details)

    setCharacterInfo(details.data.results[0]);

    console.log("characterInfo:", characterInfo);

  }

  useEffect(() => {

    characterDetail();

  }, [])

  return (
    <>
        <h1>Character Info: {character}</h1>



    </>
  )
}

export default Characters