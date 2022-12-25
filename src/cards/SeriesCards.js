import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

import incrementSeriesAction from '../actions/incrementSeriesAction'
import decrementSeriesAction from '../actions/decrementSeriesAction'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SeriesCards = ({characterID}) => {

    const API_KEY = process.env.REACT_APP_API_KEY

    const [series1, setSeries1] = useState()
    const [series2, setSeries2] = useState()
    const [series3, setSeries3] = useState()
    const [series4, setSeries4] = useState()

    const dispatch = useDispatch();
    const items_series = useSelector(state => state.series.items_series)

    const seriesDetail = async () => {

        const url = `https://gateway.marvel.com:443/v1/public/characters/${characterID}/series?apikey=${API_KEY}`
        
        const data = await fetch(url)
        
        const details = await data.json();

        setSeries1(details.data.results[items_series])
        setSeries2(details.data.results[items_series+1])
        setSeries3(details.data.results[items_series+2])
        setSeries4(details.data.results[items_series+3])

    }

    useEffect(() => {

        seriesDetail();
    
      }, [items_series, characterID])

  return (
    <>
        SeriesCards

        <h2>Series: {items_series}</h2>

        <Container>
          <Row>
            <Col>
              {
                series1 === undefined
                ?
                ''
                :
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${series1.thumbnail.path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{series1.title}</Card.Title>
                    <Button variant="primary"><Link to={`/series/${series1.title}`} className="">View Series</Link></Button>
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
                  <Card.Img variant="top" src={`${series2.thumbnail.path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{series2.title}</Card.Title>
                    <Button variant="primary"><Link to={`/series/${series2.title}`} className="">View Series</Link></Button>
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
                  <Card.Img variant="top" src={`${series3.thumbnail.path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{series3.title}</Card.Title>
                    <Button variant="primary"><Link to={`/series/${series3.title}`} className="">View Series</Link></Button>
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
                  <Card.Img variant="top" src={`${series4.thumbnail.path}.jpg`} />
                  <Card.Body>
                    <Card.Title>{series4.title}</Card.Title>
                    <Button variant="primary"><Link to={`/series/${series4.title}`} className="">View Series</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
          </Row>
        </Container>
        <button onClick={() => dispatch(decrementSeriesAction(4))} >Back</button>
        <button onClick={() => dispatch(incrementSeriesAction(4))} >More</button>
    </>
  )
}

export default SeriesCards