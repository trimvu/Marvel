import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

import allActions from '../../../actions/index';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StoriesCards = ({characterID}) => {

  const API_KEY = process.env.REACT_APP_API_KEY

  const [stories1, setStories1] = useState()
  const [stories2, setStories2] = useState()
  const [stories3, setStories3] = useState()
  const [stories4, setStories4] = useState()

  const dispatch = useDispatch();
  const items_stories = useSelector(state => state.stories.items_stories)

  const storiesDetail = async () => {

    const url = `https://gateway.marvel.com:443/v1/public/characters/${characterID}/stories?apikey=${API_KEY}`
    
    const data = await fetch(url)
    
    const details = await data.json();

    setStories1(details.data.results[items_stories])
    setStories2(details.data.results[items_stories+1])
    setStories3(details.data.results[items_stories+2])
    setStories4(details.data.results[items_stories+3])

  }

  useEffect(() => {

    storiesDetail();

  }, [items_stories, characterID])

  return (
    <>
        StoriesCards

                <h2>Stories: {items_stories}</h2>

        <Container>
          <Row>
            <Col>
              {
                stories1 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  {/* <Card.Img variant="top" src={`${image}.jpg`} /> */}
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
                  {/* <Card.Img variant="top" src={`${image}.jpg`} /> */}
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
                  {/* <Card.Img variant="top" src={`${image}.jpg`} /> */}
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
                  {/* <Card.Img variant="top" src={`${image}.jpg`} /> */}
                  <Card.Body>
                    <Card.Title>{stories4.title}</Card.Title>
                    <Button variant="primary"><Link to={`/stories/${stories4.title}`} className="">View stories</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
          </Row>
        </Container>
        <button onClick={() => dispatch(allActions.decrementStoriesAction(4))} >Back</button>
        <button onClick={() => dispatch(allActions.incrementStoriesAction(4))} >More</button>
    </>
  )
}

export default StoriesCards