import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../style/CharactersResults.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CreatorsResults = () => {

  const API_KEY = process.env.REACT_APP_API_KEY
  
  const [creatorsList, setCreatorsList] = useState([])

  let {search} = useParams();

  const creatorsListFetch = async () => {

    const data = await fetch(`https://gateway.marvel.com:443/v1/public/creators?nameStartsWith=${search}&apikey=${API_KEY}&limit=99`)

    const details = await data.json();

    // console.log("creator details: ", details)

    setCreatorsList(details.data.results)

  }

  useEffect(() => {

    creatorsListFetch();

  }, [])

  return (
    <>
      <Container className='text-center bg-danger text-white'>
        
        <h1>CREATORS RESULTS: </h1>

        {
          creatorsList.map(info => {
              return (
                  <Row className='mt-3 me-5' key={info.id}>
                      <Col sm={{ offset: 3 }} md={{ offset: 5 }}>
                        <Card style={{ width: '18rem' }}>
                          <Button variant='danger'><Link to={`/creators/${info.fullName}`} state={{creatorsID: info.id}} className="white">{info.fullName} {info.id}</Link></Button>
                          <br />
                          <Card.Img variant="top" alt='Creator' src={`${info.thumbnail.path}.jpg`} className="result-thumbnail" />
                          <br />
                        </Card>
                        <br />
                      </Col>
                  </Row>
              )
          })
        }
        <br />
      </Container>

    </>
  )
}

export default CreatorsResults