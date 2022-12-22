import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Characters = () => {
  
  const API_KEY = process.env.REACT_APP_API_KEY

  const [characterInfo, setCharacterInfo] = useState()
  const [availableSeries, setAvailableSeries] = useState()
  const [image, setImage] = useState()
  const [description, setDescription] = useState()
  const [series, setSeries] = useState([])
  
  let {character} = useParams()
  
  // console.log("character is: " + character)

  const characterDetail = async () => {

    const data = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${character}&orderBy=name&apikey=${API_KEY}`);

    const details = await data.json(); 

    // console.log("the details: ", details)

    setCharacterInfo(details.data.results[0]);
    setAvailableSeries(details.data.results[0].series.available)
    setDescription(details.description)
    setImage(details.data.results[0].thumbnail.path)
    // setSeries(details.data.results[0].series[`${page}`])

    let charArr = [];
    let i = 0;
    // let resultArr = [];

  // do {
  //   // resultArr = setSeries(details.data.results[0].series[i])
  //   charArr.push(setSeries(details.data.results[0].series[i]));
  //   i++
  // } while (i < availableSeries);

  for (let i=0; i < availableSeries; i++) {
    if (details.data.results[0].series[i]) {
      charArr.push(details.data.results[0].series[i]);
    }
    setSeries(charArr);
  }


    // console.log("The charArr: ", charArr);

    // console.log("characterInfo:", characterInfo);
    // console.log(availableSeries);

  }

  console.log(typeof availableSeries)
  // console.log("character info: ", characterInfo)
  console.log("series: ", series)

  useEffect(() => {

    characterDetail();

  }, [])

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
            <h2>Series</h2>
            <p>{characterInfo.series.items[0].name}</p>
          </div>
        }

{/* THIS DOES NOT WORK */}
        {/* <h2>Description</h2>
        {
          description === ""
          ?
          "This character does not have a description available"
          :
          <div>
            {description}
          </div>
        } */}

        <br /><br />

        {availableSeries} 

        {/* <h2>Series</h2> */}

        {/* {
          series === undefined
          ?
          ''
          :
          series.map(info => {
              return (
                  <ul key={info.id}>
                      <li>
                          info.name
                      </li>
                  </ul>
              )

          })
        } */}

    </>
  )
}

export default Characters