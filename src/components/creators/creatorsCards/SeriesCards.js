import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

import allActions from '../../../actions/index';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SeriesCards = ({creatorsID}) => {

    const API_KEY = process.env.REACT_APP_API_KEY

    const [series1, setSeries1] = useState()
    const [series2, setSeries2] = useState()
    const [series3, setSeries3] = useState()
    const [series4, setSeries4] = useState()

    const [seriesID1, setSeriesID1] = useState()
    const [seriesID2, setSeriesID2] = useState()
    const [seriesID3, setSeriesID3] = useState()
    const [seriesID4, setSeriesID4] = useState()

    const [total, setTotal] = useState()
    const [total2, setTotal2] = useState()

    const dispatch = useDispatch();
    const items_series = useSelector(state => state.series.items_series)

    const count = items_series / 4

    const seriesDetail = async () => {

        const url = `https://gateway.marvel.com:443/v1/public/creators/${creatorsID}/series?apikey=${API_KEY}&limit=4&offset=${items_series}`
        
        const data = await fetch(url)
        
        const details = await data.json();

        // console.log("series cards details: ", details)

        setTotal(Math.ceil((details.data.total)/4))
        setTotal2(details.data.total)

        setSeries1(details.data.results[0])
        setSeries2(details.data.results[1])
        setSeries3(details.data.results[2])
        setSeries4(details.data.results[3])

        setSeriesID1(details.data.results[0].id)
        setSeriesID2(details.data.results[1].id)
        setSeriesID3(details.data.results[2].id)
        setSeriesID4(details.data.results[3].id)
    }

    const resetIncrementFetch = () => {

      if (((total2 - items_series) < 4) || ((total2 - items_series) === 4)) {
          return () => dispatch(allActions.resetSeriesAction(0))
      } else {
          return () => dispatch(allActions.incrementSeriesAction(4))
      }
  
    }
  
    const resetDecrementFetch = () => {
  
        if (items_series <= 0) {
            return () => dispatch(allActions.resetSeriesAction(0))
        } else {
            return () => dispatch(allActions.decrementSeriesAction(4))
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

      dispatch(allActions.resetSeriesAction(0))

    }

    useEffect(() => {

        seriesDetail();
    
    }, [items_series, creatorsID])

    useEffect(() => {

      loadReset();
      
    }, [])

  return (
    <>

        <Container>
          <Row className='text-white bg-danger text-center'><h2>Series: </h2></Row>
          <br />
          <Row>
            <Col>
              {
                series1 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${series1.thumbnail.path}.${series1.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{series1.title}</Card.Title>
                    <Button variant="danger"><Link to={`/series/${series1.title}`} state={{seriesID: seriesID1}} className="white">View Series {seriesID1}</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                series2 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${series2.thumbnail.path}.${series2.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{series2.title}</Card.Title>
                    <Button variant="danger"><Link to={`/series/${series2.title}`} state={{seriesID: seriesID2}} className="white">View Series {seriesID2}</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                series3 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${series3.thumbnail.path}.${series3.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{series3.title}</Card.Title>
                    <Button variant="danger"><Link to={`/series/${series3.title}`} state={{seriesID: seriesID3}} className="white">View Series {seriesID3}</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
            <Col>
              {
                series4 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${series4.thumbnail.path}.${series4.thumbnail.extension}`} />
                  <Card.Body>
                    <Card.Title>{series4.title}</Card.Title>
                    <Button variant="danger"><Link to={`/series/${series4.title}`} state={{seriesID: seriesID4}} className="white">View Series {seriesID4}</Link></Button>
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

export default SeriesCards