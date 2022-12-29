import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

import allActions from '../../../actions/index';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StoriesCards = ({characterID, image}) => {

  const API_KEY = process.env.REACT_APP_API_KEY

  const [stories1, setStories1] = useState()
  const [stories2, setStories2] = useState()
  const [stories3, setStories3] = useState()
  const [stories4, setStories4] = useState()

  const [storiesID1, setStoriesID1] = useState()
  const [storiesID2, setStoriesID2] = useState()
  const [storiesID3, setStoriesID3] = useState()
  const [storiesID4, setStoriesID4] = useState()

  const dispatch = useDispatch();
  const items_stories = useSelector(state => state.stories.items_stories)

  const storiesDetail = async () => {

    const url = `https://gateway.marvel.com:443/v1/public/characters/${characterID}/stories?apikey=${API_KEY}&limit=4&offset=${items_stories}`
    
    const data = await fetch(url)
    
    const details = await data.json();

    console.log("stories cards details: ", details)

    setStories1(details.data.results[0])
    setStories2(details.data.results[1])
    setStories3(details.data.results[2])
    setStories4(details.data.results[3])

    setStoriesID1(details.data.results[0].id)
    setStoriesID2(details.data.results[1].id)
    setStoriesID3(details.data.results[2].id)
    setStoriesID4(details.data.results[3].id)

  }

  useEffect(() => {

    storiesDetail();

  }, [items_stories, characterID])

  return (
    <>
        <Container>
          <Row className='text-white bg-danger text-center'><h2>Stories: </h2></Row>
          <br />
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
                    <Button variant="danger"><Link to={`/stories/${stories1.title}`} state={{storiesID: storiesID1}} className="">View stories {storiesID1}</Link></Button>
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
                    <Button variant="danger"><Link to={`/stories/${stories2.title}`} state={{storiesID: storiesID2}} className="">View stories {storiesID2}</Link></Button>
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
                    <Button variant="danger"><Link to={`/stories/${stories3.title}`} state={{storiesID: storiesID3}} className="">View stories {storiesID3}</Link></Button>
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
                    <Button variant="danger"><Link to={`/stories/${stories4.title}`} state={{storiesID: storiesID4}} className="">View stories {storiesID4}</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={{offset: 5 }}>
              <Button variant='danger' onClick={() => dispatch(allActions.decrementStoriesAction(4))} >Back</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant='danger' onClick={() => dispatch(allActions.incrementStoriesAction(4))} >More</Button>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default StoriesCards