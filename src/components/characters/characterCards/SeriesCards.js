import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

import allActions from '../../../actions/index';

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

    const [seriesID1, setSeriesID1] = useState()
    const [seriesID2, setSeriesID2] = useState()
    const [seriesID3, setSeriesID3] = useState()
    const [seriesID4, setSeriesID4] = useState()

    const dispatch = useDispatch();
    const items_series = useSelector(state => state.series.items_series)

    const seriesDetail = async () => {

        const url = `https://gateway.marvel.com:443/v1/public/characters/${characterID}/series?apikey=${API_KEY}&limit=4&offset=${items_series}`
        
        const data = await fetch(url)
        
        const details = await data.json();

        console.log("series cards details: ", details)

        setSeries1(details.data.results[0])
        setSeries2(details.data.results[1])
        setSeries3(details.data.results[2])
        setSeries4(details.data.results[3])

        setSeriesID1(details.data.results[0].id)
        setSeriesID2(details.data.results[1].id)
        setSeriesID3(details.data.results[2].id)
        setSeriesID4(details.data.results[3].id)
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
                    <Button variant="success"><Link to={`/series/${series1.title}`} state={{seriesID: seriesID1}} className="">View Series {seriesID1}</Link></Button>
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
                    <Button variant="success"><Link to={`/series/${series2.title}`} state={{seriesID: seriesID2}} className="">View Series {seriesID2}</Link></Button>
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
                    <Button variant="success"><Link to={`/series/${series3.title}`} state={{seriesID: seriesID3}} className="">View Series {seriesID3}</Link></Button>
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
                    <Button variant="success"><Link to={`/series/${series4.title}`} state={{seriesID: seriesID4}} className="">View Series {seriesID4}</Link></Button>
                  </Card.Body>
                </Card>
              }
            </Col>
          </Row>
        </Container>
        <button onClick={() => dispatch(allActions.decrementSeriesAction(4))} >Back</button>
        <button onClick={() => dispatch(allActions.incrementSeriesAction(4))} >More</button>
    </>
  )
}

export default SeriesCards