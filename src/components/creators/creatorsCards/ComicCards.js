import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

import allActions from '../../../actions/index';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ComicCards = ({creatorsID}) => {

  // console.log("creatorsID is: ", creatorsID)

  const API_KEY = process.env.REACT_APP_API_KEY

  const [comic1, setComic1] = useState()
  const [comic2, setComic2] = useState()
  const [comic3, setComic3] = useState()
  const [comic4, setComic4] = useState()

  const [comicID1, setComicID1] = useState()
  const [comicID2, setComicID2] = useState()
  const [comicID3, setComicID3] = useState()
  const [comicID4, setComicID4] = useState()

  const [total, setTotal] = useState()
  const [total2, setTotal2] = useState()

  const dispatch = useDispatch();
  const items_comic = useSelector(state => state.comic.items_comic)

  const count = items_comic / 4

  const comicDetail = async () => {

    const url = `https://gateway.marvel.com:443/v1/public/creators/${creatorsID}/comics?apikey=${API_KEY}&limit=4&offset=${items_comic}`
    
    const data = await fetch(url)
    
    const details = await data.json();

    // console.log("comic cards details: ", details)

    setTotal(Math.ceil((details.data.total)/4))
    setTotal2(details.data.total)

    setComic1(details.data.results[0])
    setComic2(details.data.results[1])
    setComic3(details.data.results[2])
    setComic4(details.data.results[3])

    setComicID1(details.data.results[0].id)
    setComicID2(details.data.results[1].id)
    setComicID3(details.data.results[2].id)
    setComicID4(details.data.results[3].id)

  }

  const resetIncrementFetch = () => {

    if (((total2 - items_comic) < 4) || ((total2 - items_comic) === 4)) {
        return () => dispatch(allActions.resetComicAction(0))
    } else {
        return () => dispatch(allActions.incrementComicAction(4))
    }

  }

  const resetDecrementFetch = () => {

      if (items_comic <= 0) {
          return () => dispatch(allActions.resetComicAction(0))
      } else {
          return () => dispatch(allActions.decrementComicAction(4))
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

    dispatch(allActions.resetComicAction(0))

  }

  useEffect(() => {

    comicDetail();

  }, [items_comic, creatorsID])

  useEffect(() => {

    loadReset();
    
  }, [])

  return (
    <>
        <Container>
          <Row className='text-white bg-danger text-center'><h2>Comic(s): </h2></Row>
          <br />
          <Row>
            <Col>
              {
                comic1 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${comic1.thumbnail.path}.${comic1.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{comic1.title}</Card.Title>
                    <Button variant="danger"><Link to={`/comic/${comic1.title}`} state={{comicID: comicID1}} className="white">View comic {comicID1}</Link></Button>
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
                  <Card.Img variant="top" src={`${comic2.thumbnail.path}.${comic2.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{comic2.title}</Card.Title>
                    <Button variant="danger"><Link to={`/comic/${comic2.title}`} state={{comicID: comicID2}} className="white">View comic {comicID2}</Link></Button>
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
                  <Card.Img variant="top" src={`${comic3.thumbnail.path}.${comic3.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{comic3.title}</Card.Title>
                    <Button variant="danger"><Link to={`/comic/${comic3.title}`} state={{comicID: comicID3}} className="white">View comic {comicID3}</Link></Button>
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
                  <Card.Img variant="top" src={`${comic4.thumbnail.path}.${comic4.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{comic4.title}</Card.Title>
                    <Button variant="danger"><Link to={`/comic/${comic4.title}`} state={{comicID: comicID4}} className="white">View comic {comicID4}</Link></Button>
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

export default ComicCards