import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

import allActions from '../../../actions/index';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CharactersCards = ({eventsID}) => {

  // console.log("events ID is: ", eventsID)

  const API_KEY = process.env.REACT_APP_API_KEY

  const [character1, setCharacter1] = useState()
  const [character2, setCharacter2] = useState()
  const [character3, setCharacter3] = useState()
  const [character4, setCharacter4] = useState()

  const [characterID1, setCharacterID1] = useState()
  const [characterID2, setCharacterID2] = useState()
  const [characterID3, setCharacterID3] = useState()
  const [characterID4, setCharacterID4] = useState()

  const [total, setTotal] = useState()
  const [total2, setTotal2] = useState()

  const dispatch = useDispatch();
  const items_characters = useSelector(state => state.characters.items_characters)

  const count = items_characters / 4

  const charactersDetail = async () => {
    
    const url = `https://gateway.marvel.com:443/v1/public/events/${eventsID}/characters?apikey=${API_KEY}&limit=4&offset=${items_characters}`

    const data = await fetch(url)

    const details = await data.json();

    // console.log("characters card details: ", details)

    setTotal(Math.ceil((details.data.total)/4))
    setTotal2(details.data.total)

    setCharacter1(details.data.results[0])
    setCharacter2(details.data.results[1])
    setCharacter3(details.data.results[2])
    setCharacter4(details.data.results[3])

    setCharacterID1(details.data.results[0].id)
    setCharacterID2(details.data.results[1].id)
    setCharacterID3(details.data.results[2].id)
    setCharacterID4(details.data.results[3].id)

  }

  const resetIncrementFetch = () => {

    if (((total2 - items_characters) < 4) || ((total2 - items_characters) === 4)) {
        return () => dispatch(allActions.resetCharactersAction(0))
    } else {
        return () => dispatch(allActions.incrementCharactersAction(4))
    }

  }

  const resetDecrementFetch = () => {

      if (items_characters <= 0) {
          return () => dispatch(allActions.resetCharactersAction(0))
      } else {
          return () => dispatch(allActions.decrementCharactersAction(4))
      }

  }

  const oneOrZero = () => {

      if (total2 === 0) {
          return 0;
      } else {
          return (count + 1);
      }

  }

  const loadReset = () => {

    dispatch(allActions.resetCharactersAction(0))

  }

  useEffect(() => {

    charactersDetail();

  }, [items_characters, eventsID])

  useEffect(() => {

    loadReset();
    
  }, [])

  return (
    <>
        <Container>
          <Row className='text-white bg-danger text-center'><h2>Character(s): </h2></Row>
          <br />
          <Row>
            <Col>
              {
                character1 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${character1.thumbnail.path}.${character1.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{character1.name}</Card.Title>
                    <Button variant="danger"><Link to={`/character/${character1.name}`} state={{characterID: characterID1}} className="white">View character {characterID1}</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                character2 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${character2.thumbnail.path}.${character2.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{character2.name}</Card.Title>
                    <Button variant="danger"><Link to={`/character/${character2.name}`} state={{characterID: characterID2}} className="white">View character {characterID2}</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                character3 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${character3.thumbnail.path}.${character3.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{character3.name}</Card.Title>
                    <Button variant="danger"><Link to={`/character/${character3.name}`} state={{characterID: characterID3}} className="white">View character {characterID3}</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                character4 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${character4.thumbnail.path}.${character4.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{character4.name}</Card.Title>
                    <Button variant="danger"><Link to={`/character/${character4.name}`} state={{characterID: characterID4}} className="white">View character {characterID4}</Link></Button>
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

export default CharactersCards