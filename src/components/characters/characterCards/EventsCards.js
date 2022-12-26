import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

import allActions from '../../../actions/index';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EventsCards = ({characterID}) => {

  const API_KEY = process.env.REACT_APP_API_KEY

  const [events1, setEvents1] = useState()
  const [events2, setEvents2] = useState()
  const [events3, setEvents3] = useState()
  const [events4, setEvents4] = useState()

  const dispatch = useDispatch();
  const items_events = useSelector(state => state.events.items_events)

  const eventsDetail = async () => {

    const url = `https://gateway.marvel.com:443/v1/public/characters/${characterID}/events?apikey=${API_KEY}`
    
    const data = await fetch(url)
    
    const details = await data.json();

    setEvents1(details.data.results[items_events])
    setEvents2(details.data.results[items_events+1])
    setEvents3(details.data.results[items_events+2])
    setEvents4(details.data.results[items_events+3])

  }

  useEffect(() => {

    eventsDetail();

  }, [items_events, characterID])

  return (
    <>
        EventsCards

        <h2>Events: {items_events}</h2>

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
        <button onClick={() => dispatch(allActions.decrementEventsAction(4))} >Back</button>
        <button onClick={() => dispatch(allActions.incrementEventsAction(4))} >More</button>
    </>
  )
}

export default EventsCards