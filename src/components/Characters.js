import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import incrementAction from '../actions/incrementAction'
import decrementAction from '../actions/decrementAction'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Characters = () => {
  
  const API_KEY = process.env.REACT_APP_API_KEY

  const [characterInfo, setCharacterInfo] = useState()
  const [availableSeries, setAvailableSeries] = useState()
  const [image, setImage] = useState()
  const [description, setDescription] = useState()
  // const [series, setSeries] = useState([])

  const [series1, setSeries1] = useState()
  const [series2, setSeries2] = useState()
  const [series3, setSeries3] = useState()
  const [series4, setSeries4] = useState()
  const [series5, setSeries5] = useState()

  const [characterID, setCharacterID] = useState()
  const [collectionSeriesURI, setCollectionSeriesURI] = useState()

  const [additionalInfo, setAdditionalInfo] = useState()

  const dispatch = useDispatch();
  const items = useSelector(state => state.items)
  
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

    // setSeries(details.data.results[0].series.items[items])



    // setSeries1(details.data.results[0].series.items[items])
    // setSeries2(details.data.results[0].series.items[items+1])
    // setSeries3(details.data.results[0].series.items[items+2])
    // setSeries4(details.data.results[0].series.items[items+3])
    // setSeries5(details.data.results[0].series.items[items+4])

    setCharacterID(details.data.results[0].id)
    setCollectionSeriesURI(`https://gateway.marvel.com:443/v1/public/characters/${characterID}/series?apikey=${API_KEY}`)

    const series = await fetch(collectionSeriesURI)

    const seriesDetails = await series.json();

    console.log("series details: ", seriesDetails)

    setSeries1(seriesDetails.data.results[items])
    setSeries2(seriesDetails.data.results[items+1])
    setSeries3(seriesDetails.data.results[items+2])
    setSeries4(seriesDetails.data.results[items+3])
    setSeries5(seriesDetails.data.results[items+4])
    
    // const seriesFetch = async () => {


    // }

    // seriesFetch()
    
    setAdditionalInfo(details.data.results[0].urls[0].url)

    // let charArr = [];
    // let i = 0;
    // let resultArr = [];

  // do {
  //   // resultArr = setSeries(details.data.results[0].series[i])
  //   charArr.push(setSeries(details.data.results[0].series[i]));
  //   i++
  // } while (i < availableSeries);

  // for (let i=0; i < availableSeries; i++) {
  //   if (details.data.results[0].series[i]) {
  //     charArr.push(details.data.results[0].series[i]);
  //   }
  //   setSeries(charArr);
  // }


    // console.log("The charArr: ", charArr);

    console.log("characterInfo: ", characterInfo);
    // console.log(detail)
    // console.log(availableSeries);

  }

  console.log(typeof availableSeries)
  // console.log("character info: ", characterInfo)
  // console.log("series: ", series)
  // console.log("series 60:", series1)
  console.log(characterID)

  useEffect(() => {

    characterDetail();

  }, [items])

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

        {/* <h2>Additional Info: </h2> */}

        <h2>Series: {items}</h2>


        <div>
          {
            series1 === undefined
            ?
            ''
            :
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`${series1.thumbnail.path}.jpg`} />
              <Card.Body>
                <Card.Title>{series1.title}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            // <div>
            //   <h2>{series1.title}</h2><br />
            //   <img src={`${series1.thumbnail.path}.jpg`} ></img>
            // </div>
          }
          <br />
          {
            series2 === undefined
            ?
            ''
            :
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`${series2.thumbnail.path}.jpg`} />
              <Card.Body>
                <Card.Title>{series2.title}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          }
          <br />
          {
            series3 === undefined
            ?
            ''
            :
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`${series3.thumbnail.path}.jpg`} />
              <Card.Body>
                <Card.Title>{series3.title}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          }
          <br />
          {
            series4 === undefined
            ?
            ''
            :
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`${series4.thumbnail.path}.jpg`} />
              <Card.Body>
                <Card.Title>{series4.title}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          }
          <br />
          {
            series5 === undefined
            ?
            ''
            :
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`${series5.thumbnail.path}.jpg`} />
              <Card.Body>
                <Card.Title>{series5.title}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          }
          
        </div>
        <button onClick={() => dispatch(decrementAction(5))} >Back</button>
        <button onClick={() => dispatch(incrementAction(5))} >More</button>
        
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