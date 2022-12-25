import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import './style/Characters.css'

// import incrementComicAction from '../actions/incrementComicAction'
// import decrementComicAction from '../actions/decrementComicAction'
// import incrementEventsAction from '../actions/incrementEventsAction'
// import decrementEventsAction from '../actions/decrementEventsAction'
// import incrementSeriesAction from '../actions/incrementSeriesAction'
// import decrementSeriesAction from '../actions/decrementSeriesAction'
// import incrementStoriesAction from '../actions/incrementStoriesAction'
// import decrementStoriesAction from '../actions/decrementStoriesAction'

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

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
  // const [series, setSeries] = useState([])

  // const [comic1, setComic1] = useState()
  // const [comic2, setComic2] = useState()
  // const [comic3, setComic3] = useState()
  // const [comic4, setComic4] = useState()

  // const [events1, setEvents1] = useState()
  // const [events2, setEvents2] = useState()
  // const [events3, setEvents3] = useState()
  // const [events4, setEvents4] = useState()

  // const [series1, setSeries1] = useState()
  // const [series2, setSeries2] = useState()
  // const [series3, setSeries3] = useState()
  // const [series4, setSeries4] = useState()
  // const [series5, setSeries5] = useState()

  // const [stories1, setStories1] = useState()
  // const [stories2, setStories2] = useState()
  // const [stories3, setStories3] = useState()
  // const [stories4, setStories4] = useState()

  const [characterID, setCharacterID] = useState()
  // const [collectionComicURI, setCollectionComicURI] = useState()
  // const [collectionEventsURI, setCollectionEventsURI] = useState()
  // const [collectionSeriesURI, setCollectionSeriesURI] = useState()
  // const [collectionStoriesURI, setCollectionStoriesURI] = useState()

  const [additionalInfo, setAdditionalInfo] = useState()

  const dispatch = useDispatch();
  // const items_comic = useSelector(state => state.comic.items_comic)
  // const items_events = useSelector(state => state.events.items_events)
  // const items_series = useSelector(state => state.series.items_series)
  // const items_stories = useSelector(state => state.stories.items_stories)
  
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
    // setCollectionComicURI(`https://gateway.marvel.com:443/v1/public/characters/${characterID}/comics?apikey=${API_KEY}`)
    // const comic = await fetch(collectionComicURI)
    // const comicDetails = await comic.json();
    // console.log(comicDetails)
    // setCollectionEventsURI(`https://gateway.marvel.com:443/v1/public/characters/${characterID}/events?apikey=${API_KEY}`)
    // const events = await fetch(collectionEventsURI)
    // const eventsDetails = await events.json();
    // console.log("events details: ", eventsDetails)
    // setCollectionSeriesURI(`https://gateway.marvel.com:443/v1/public/characters/${characterID}/series?apikey=${API_KEY}`)
    // const series = await fetch(collectionSeriesURI)
    // const seriesDetails = await series.json();
    // setCollectionStoriesURI(`https://gateway.marvel.com:443/v1/public/characters/${characterID}/stories?apikey=${API_KEY}`)
    // const stories = await fetch(collectionStoriesURI)
    // const storiesDetails = await stories.json();
    // console.log("stories details: ", storiesDetails)


    // console.log("series details: ", seriesDetails)

    // setComic1(comicDetails.data.results[items_comic])
    // setComic2(comicDetails.data.results[items_comic+1])
    // setComic3(comicDetails.data.results[items_comic+2])
    // setComic4(comicDetails.data.results[items_comic+3])

    // setEvents1(eventsDetails.data.results[items_events])
    // setEvents2(eventsDetails.data.results[items_events+1])
    // setEvents3(eventsDetails.data.results[items_events+2])
    // setEvents4(eventsDetails.data.results[items_events+3])

    // setSeries1(seriesDetails.data.results[items_series])
    // setSeries2(seriesDetails.data.results[items_series+1])
    // setSeries3(seriesDetails.data.results[items_series+2])
    // setSeries4(seriesDetails.data.results[items_series+3])
    // setSeries5(seriesDetails.data.results[items+4])

    // setStories1(storiesDetails.data.results[items_stories])
    // setStories2(storiesDetails.data.results[items_stories+1])
    // setStories3(storiesDetails.data.results[items_stories+2])
    // setStories4(storiesDetails.data.results[items_stories+3])

    
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

    // console.log("characterInfo: ", characterInfo);
    // console.log(detail)
    // console.log(availableSeries);

  }

  // console.log(typeof availableSeries)
  // console.log("character info: ", characterInfo)
  // console.log("series: ", series)
  // console.log("series 60:", series1)
  // console.log(characterID)
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

        //! COMIC
        <ComicCards characterID={characterID} />
        {/* <h2>Comic: {items_comic}</h2>

        <Container>
          <Row>
            <Col>
              {
                comic1 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${comic1.thumbnail.path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{comic1.title}</Card.Title>
                    <Button variant="primary"><Link to={`/comic/${comic1.title}`} className="">View comic</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                comic2 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${comic2.thumbnail.path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{comic2.title}</Card.Title>
                    <Button variant="primary"><Link to={`/comic/${comic2.title}`} className="">View comic</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                comic3 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${comic3.thumbnail.path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{comic3.title}</Card.Title>
                    <Button variant="primary"><Link to={`/comic/${comic3.title}`} className="">View comic</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                comic4 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${comic4.thumbnail.path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{comic4.title}</Card.Title>
                    <Button variant="primary"><Link to={`/comic/${comic4.title}`} className="">View comic</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
          </Row>
        </Container>
        <button onClick={() => dispatch(decrementComicAction(4))} >Back</button>
        <button onClick={() => dispatch(incrementComicAction(4))} >More</button> */}


        //! EVENTS
        <EventsCards characterID={characterID} />
        {/* <h2>Events: {items_events}</h2>

        <Container>
          <Row>
            <Col>
              {
                events1 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${events1.thumbnail.path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{events1.title}</Card.Title>
                    <Button variant="primary"><Link to={`/events/${events1.title}`} className="">View events</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                events2 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${events2.thumbnail.path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{events2.title}</Card.Title>
                    <Button variant="primary"><Link to={`/events/${events2.title}`} className="">View events</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                events3 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${events3.thumbnail.path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{events3.title}</Card.Title>
                    <Button variant="primary"><Link to={`/events/${events3.title}`} className="">View events</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                events4 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${events4.thumbnail.path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{events4.title}</Card.Title>
                    <Button variant="primary"><Link to={`/events/${events4.title}`} className="">View events</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
          </Row>
        </Container>
        <button onClick={() => dispatch(decrementEventsAction(4))} >Back</button>
        <button onClick={() => dispatch(incrementEventsAction(4))} >More</button> */}


        //! SERIES
        <SeriesCards characterID={characterID} />
        {/* <h2>Series: {items_series}</h2>

        <Container>
          <Row>
            <Col>
              {
                series1 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${series1.thumbnail.path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{series1.title}</Card.Title>
                    <Button variant="primary"><Link to={`/series/${series1.title}`} className="">View Series</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                series2 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${series2.thumbnail.path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{series2.title}</Card.Title>
                    <Button variant="primary"><Link to={`/series/${series2.title}`} className="">View Series</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                series3 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${series3.thumbnail.path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{series3.title}</Card.Title>
                    <Button variant="primary"><Link to={`/series/${series3.title}`} className="">View Series</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                series4 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${series4.thumbnail.path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{series4.title}</Card.Title>
                    <Button variant="primary"><Link to={`/series/${series4.title}`} className="">View Series</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
          </Row>
        </Container>
        <button onClick={() => dispatch(decrementSeriesAction(4))} >Back</button>
        <button onClick={() => dispatch(incrementSeriesAction(4))} >More</button> */}


        //! STORIES
        <StoriesCards characterID={characterID} />
        {/* <h2>Stories: {items_stories}</h2>

        <Container>
          <Row>
            <Col>
              {
                stories1 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${image}.jpg`} />
                  <Card.Body>
                    <Card.Title>{stories1.title}</Card.Title>
                    <Button variant="primary"><Link to={`/stories/${stories1.title}`} className="">View stories</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                stories2 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${image}.jpg`} />
                  <Card.Body>
                    <Card.Title>{stories2.title}</Card.Title>
                    <Button variant="primary"><Link to={`/stories/${stories2.title}`} className="">View stories</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                stories3 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${image}.jpg`} />
                  <Card.Body>
                    <Card.Title>{stories3.title}</Card.Title>
                    <Button variant="primary"><Link to={`/stories/${stories3.title}`} className="">View stories</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                stories4 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${image}.jpg`} />
                  <Card.Body>
                    <Card.Title>{stories4.title}</Card.Title>
                    <Button variant="primary"><Link to={`/stories/${stories4.title}`} className="">View stories</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
          </Row>
        </Container>
        <button onClick={() => dispatch(decrementStoriesAction(4))} >Back</button>
        <button onClick={() => dispatch(incrementStoriesAction(4))} >More</button> */}
        
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