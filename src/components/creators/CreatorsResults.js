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

const CreatorsResults = () => {

  const API_KEY = process.env.REACT_APP_API_KEY
  
  const [creatorsList, setCreatorsList] = useState([])

  const [total, setTotal] = useState(0)
  const [total2, setTotal2] = useState(0)

  let {search} = useParams();

  const dispatch = useDispatch();
  const items_creators_results = useSelector(state => state.creatorsResults.items_creators_results)

  let count = items_creators_results / 10

  const creatorsListFetch = async () => {

    const data = await fetch(`https://gateway.marvel.com:443/v1/public/creators?nameStartsWith=${search}&apikey=${API_KEY}&limit=10&offset=${items_creators_results}`)

    const details = await data.json();

    // console.log("creator details: ", details)

    setCreatorsList(details.data.results)
    setTotal(Math.ceil((details.data.total)/10))
    setTotal2(details.data.total)

  }

  const resetIncrementFetch = () => {

    if (((total2 - items_creators_results) < 10) || ((total2 - items_creators_results) === 10)) {
        return () => dispatch(allActions.resetCreatorsResultsAction(0))
    } else {
        return () => dispatch(allActions.incrementCreatorsResultsAction(10))
    }

  }

  const resetDecrementFetch = () => {

      if (items_creators_results <= 0) {
          return () => dispatch(allActions.resetCreatorsResultsAction(0))
      } else {
          return () => dispatch(allActions.decrementCreatorsResultsAction(10))
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

    creatorsListFetch();

  }, [items_creators_results])

  return (
    <>
      <br />
      <Container className='text-center text-white'>
        
        <h1 className='red-bg'>CREATORS RESULTS: </h1>
        <h1 className='red-bg'>Search results for: {search}</h1>

        {
          creatorsList.length > 0
          ?
          creatorsList.map(info => {
              return (
                  <Row className='mt-3 me-5' key={info.id}>
                      <Col sm={{ offset: 3 }} md={{ offset: 5 }}>
                        <Card style={{ width: '18rem' }}>
                          <Button variant='danger'><Link to={`/creators/${info.fullName}`} state={{creatorsID: info.id}} className="white">{info.fullName} {info.id}</Link></Button>
                          <br />
                          <Card.Img variant="top" alt='Creator' src={`${info.thumbnail.path}.${info.thumbnail.extension}`} className="result-thumbnail" />
                          <br />
                        </Card>
                        <br />
                      </Col>
                  </Row>
              )
          })
          :
          <div />
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

export default CreatorsResults