import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

import allActions from '../../../actions/index';

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

  const [comicID1, setComicID1] = useState()
  const [comicID2, setComicID2] = useState()
  const [comicID3, setComicID3] = useState()
  const [comicID4, setComicID4] = useState()

  const dispatch = useDispatch();
  const items_comic = useSelector(state => state.comic.items_comic)

  const comicDetail = async () => {

    const url = `https://gateway.marvel.com:443/v1/public/characters/${characterID}/comics?apikey=${API_KEY}`
    
    const data = await fetch(url)
    
    const details = await data.json();

    console.log("comic cards details: ", details)

    setComic1(details.data.results[items_comic])
    setComic2(details.data.results[items_comic+1])
    setComic3(details.data.results[items_comic+2])
    setComic4(details.data.results[items_comic+3])

    setComicID1(details.data.results[items_comic].id)
    setComicID2(details.data.results[items_comic+1].id)
    setComicID3(details.data.results[items_comic+2].id)
    setComicID4(details.data.results[items_comic+3].id)

  }

  useEffect(() => {

      comicDetail();

  }, [items_comic, characterID, comicID1])

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
                    <Button variant="danger"><Link to={`/comic/${comic1.title}`} state={{comicID: comicID1}} className="">View comic {comicID1}</Link></Button>
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
                    <Button variant="danger"><Link to={`/comic/${comic2.title}`} state={{comicID: comicID2}} className="">View comic {comicID2}</Link></Button>
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
                    <Button variant="danger"><Link to={`/comic/${comic3.title}`} state={{comicID: comicID3}} className="">View comic {comicID3}</Link></Button>
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
                    <Button variant="danger"><Link to={`/comic/${comic4.title}`} state={{comicID: comicID4}} className="">View comic {comicID4}</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
          </Row>
        </Container>
        <button onClick={() => dispatch(allActions.decrementComicAction(4))} >Back</button>
        <button onClick={() => dispatch(allActions.incrementComicAction(4))} >More</button>
    </>
  )
}

export default ComicCards