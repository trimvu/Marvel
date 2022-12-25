import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

import incrementComicAction from '../actions/incrementComicAction'
import decrementComicAction from '../actions/decrementComicAction'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ComicCards = ({characterID}) => {

  console.log("characterID is: ", characterID)

  const API_KEY = process.env.REACT_APP_API_KEY

  const [comic1, setComic1] = useState()
  const [comic2, setComic2] = useState()
  const [comic3, setComic3] = useState()
  const [comic4, setComic4] = useState()

  const dispatch = useDispatch();
  const items_comic = useSelector(state => state.comic.items_comic)

  const comicDetail = async () => {

    const url = `https://gateway.marvel.com:443/v1/public/characters/${characterID}/comics?apikey=${API_KEY}`
    
    const data = await fetch(url)
    
    const details = await data.json();

    console.log(details)

    setComic1(details.data.results[items_comic])
    setComic2(details.data.results[items_comic+1])
    setComic3(details.data.results[items_comic+2])
    setComic4(details.data.results[items_comic+3])

  }

  useEffect(() => {

      comicDetail();

  }, [items_comic, characterID])

  return (
    <>
        ComicCards

        <h2>Comic: {items_comic}</h2>

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
        <button onClick={() => dispatch(incrementComicAction(4))} >More</button>
    </>
  )
}

export default ComicCards