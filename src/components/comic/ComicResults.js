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

const ComicResults = () => {

  const API_KEY = process.env.REACT_APP_API_KEY

  // const [name, setName] = useState();
  // const [image, setImage] = useState();
  const [comicList, setComicList] = useState([])

  const [total, setTotal] = useState(0)
  const [total2, setTotal2] = useState(0)

  let {search} = useParams();

  const dispatch = useDispatch();
  const items_comic_results = useSelector(state => state.comicResults.items_comic_results)

  let count = items_comic_results / 10

  const comicListFetch = async () => {

      const data = await fetch(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${search}&apikey=${API_KEY}&limit=10&offset=${items_comic_results}`)

      const details = await data.json();

      // console.log("comic results: ", details.data)

      setComicList(details.data.results)
      setTotal(Math.ceil((details.data.total)/10))
      setTotal2(details.data.total)

  }

  const resetIncrementFetch = () => {

    if (((total2 - items_comic_results) < 10) || ((total2 - items_comic_results) === 10)) {
        return () => dispatch(allActions.resetComicResultsAction(0))
    } else {
        return () => dispatch(allActions.incrementComicResultsAction(10))
    }

}

  const resetDecrementFetch = () => {

      if (items_comic_results <= 0) {
          return () => dispatch(allActions.resetComicResultsAction(0))
      } else {
          return () => dispatch(allActions.decrementComicResultsAction(10))
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

      comicListFetch();
  
    }, [items_comic_results])

  return (
    <>
      <br />
      <Container className='text-center text-white'>

        <h1 className='red-bg'>COMICS RESULTS: </h1>
        <h1 className='red-bg'>Search results for: {search}</h1>

        {
            comicList.map(info => {
                return (
                    <Row className='mt-3 me-5' key={info.id}>
                      <Col sm={{ offset: 3 }} md={{ offset: 5 }}>
                        <Card style={{ width: '18rem' }}>
                          <Button variant='danger'><Link to={`/comic/${info.title}`} state={{comicID: info.id}} className="white">{info.title} {info.id}</Link></Button>
                          <br />
                          <Card.Img variant="top" alt='Comic' src={`${info.thumbnail.path}.${info.thumbnail.extension}`} className="result-thumbnail" />
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

export default ComicResults