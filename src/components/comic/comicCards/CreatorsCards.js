import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

import allActions from '../../../actions/index';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreatorsCards = ({comicID}) => {

  // console.log("comic ID is: ", comicID)

  const API_KEY = process.env.REACT_APP_API_KEY

  const [creators1, setCreators1] = useState()
  const [creators2, setCreators2] = useState()
  const [creators3, setCreators3] = useState()
  const [creators4, setCreators4] = useState()

  const [creatorsID1, setCreatorsID1] = useState()
  const [creatorsID2, setCreatorsID2] = useState()
  const [creatorsID3, setCreatorsID3] = useState()
  const [creatorsID4, setCreatorsID4] = useState()

  const [total, setTotal] = useState()
  const [total2, setTotal2] = useState()

  const dispatch = useDispatch();
  const items_creators = useSelector(state => state.creators.items_creators)

  const count = items_creators / 4

  const creatorsDetail = async () => {

    const url = `https://gateway.marvel.com:443/v1/public/comics/${comicID}/creators?apikey=${API_KEY}&limit=4&offset=${items_creators}`

    const data = await fetch(url)

    const details = await data.json();

    // console.log("creators card details: ", details)

    setTotal(Math.ceil((details.data.total)/4))
    setTotal2(details.data.total)

    setCreators1(details.data.results[0])
    setCreators2(details.data.results[1])
    setCreators3(details.data.results[2])
    setCreators4(details.data.results[3])

    setCreatorsID1(details.data.results[0].id)
    setCreatorsID2(details.data.results[1].id)
    setCreatorsID3(details.data.results[2].id)
    setCreatorsID4(details.data.results[3].id)

  }

  const resetIncrementFetch = () => {

    if (((total2 - items_creators) < 4) || ((total2 - items_creators) === 4)) {
        return () => dispatch(allActions.resetCreatorsAction(0))
    } else {
        return () => dispatch(allActions.incrementCreatorsAction(4))
    }

  }

  const resetDecrementFetch = () => {

      if (items_creators <= 0) {
          return () => dispatch(allActions.resetCreatorsAction(0))
      } else {
          return () => dispatch(allActions.decrementCreatorsAction(4))
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

    creatorsDetail();

  }, [items_creators, comicID])

  return (
    <>
        <Container>
          <Row className='text-white bg-danger text-center'><h2>Creator(s): </h2></Row>
          <br />
          <Row>
            <Col>
              {
                creators1 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${creators1.thumbnail.path}.${creators1.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{creators1.fullName}</Card.Title>
                    <Button variant="danger"><Link to={`/creators/${creators1.fullName}`} state={{creatorsID: creatorsID1}} className="white">View creators {creatorsID1}</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                creators2 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${creators2.thumbnail.path}.${creators2.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{creators2.fullName}</Card.Title>
                    <Button variant="danger"><Link to={`/creators/${creators2.fullName}`} state={{creatorsID: creatorsID2}} className="white">View creators {creatorsID2}</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                creators3 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${creators3.thumbnail.path}.${creators3.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{creators3.fullName}</Card.Title>
                    <Button variant="danger"><Link to={`/creators/${creators3.fullName}`} state={{creatorsID: creatorsID3}} className="white">View creators {creatorsID3}</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                creators4 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${creators4.thumbnail.path}.${creators4.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{creators4.fullName}</Card.Title>
                    <Button variant="danger"><Link to={`/creators/${creators4.fullName}`} state={{creatorsID: creatorsID4}} className="white">View creators {creatorsID4}</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={{offset: 5 }}>
              <Button variant='danger' onClick={resetDecrementFetch()} >Previous</Button>
              <Button variant='danger' disabled>{oneOrZero()} of {total}</Button>
              <Button variant='danger' onClick={resetIncrementFetch()} >Next</Button>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default CreatorsCards