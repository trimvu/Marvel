import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import '../style/CharactersResults.css'

import allActions from '../../actions'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const EventsResults = () => {

  const API_KEY = process.env.REACT_APP_API_KEY

  const [eventsList, setEventsList] = useState([])

  const [total, setTotal] = useState(0)
  const [total2, setTotal2] = useState(0)

  let {search} = useParams();

  const dispatch = useDispatch();
  const items_events_results = useSelector(state => state.eventsResults.items_events_results)

  let count = items_events_results / 10

  const eventsListFetch = async () => {
    
    const data = await fetch(`https://gateway.marvel.com:443/v1/public/events?nameStartsWith=${search}&apikey=${API_KEY}&limit=10&offset=${items_events_results}`)

    const details = await data.json();

    // console.log("events results: ", details.data);

    setEventsList(details.data.results)
    setTotal(Math.ceil((details.data.total)/10))
    setTotal2(details.data.total)

  }

  const resetIncrementFetch = () => {

    if (((total2 - items_events_results) < 10) || ((total2 - items_events_results) === 10)) {
        return () => dispatch(allActions.resetEventsResultsAction(0))
    } else {
        return () => dispatch(allActions.incrementEventsResultsAction(10))
    }

  }

  const resetDecrementFetch = () => {

      if (items_events_results <= 0) {
          return () => dispatch(allActions.resetEventsResultsAction(0))
      } else {
          return () => dispatch(allActions.decrementEventsResultsAction(10))
      }

  }

  const oneOrZero = () => {

    if (total2 === 0) {
        return 0;
    } else {
        return (count + 1);
    }

  }

  useEffect(() => {

    eventsListFetch();

  }, [items_events_results])

  return (
    <>
      <br />
      <Container className='text-center text-white'>

        <h1 className='red-bg'>EVENTS RESULTS: </h1>
        <h1 className='red-bg'>Search results for: {search}</h1>
        
        {
          eventsList.map(info => {
            return (
              <Row className='mt-3 me-5' key={info.id}>
                <Col sm={{ offset: 3 }} md={{ offset: 5 }}>
                  <Card style={{ width: '18rem' }}>
                    <Button variant='danger'><Link to={`/events/${info.title}`} state={{eventsID: info.id}} className="white">{info.title} {info.id}</Link></Button>
                    <br />
                    <Card.Img alt='Event' src={`${info.thumbnail.path}.${info.thumbnail.extension}`} className="result-thumbnail" />
                    <br />
                  </Card>
                  <br />
                </Col>
              </Row>
            )
          })
        }
        <br />
        {/* {count+1} of {total} */}
        <Row>
            <Col>
                <Button variant='danger' onClick={resetDecrementFetch()} >Previous</Button>
                <Button variant='danger' disabled >{oneOrZero()} of {total}</Button>
                <Button variant='danger' onClick={resetIncrementFetch()} >Next</Button>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default EventsResults