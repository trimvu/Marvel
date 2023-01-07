import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../style/CharactersResults.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CharactersResults = () => {

    const API_KEY = process.env.REACT_APP_API_KEY

    // const [name, setName] = useState();
    // const [image, setImage] = useState();
    const [characterList, setCharacterList] = useState([])

    let {search} = useParams();

    const characterListFetch = async () => {

        const data = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&orderBy=name&apikey=${API_KEY}&limit=99`)

        const details = await data.json();

        // console.log(details.data)

        setCharacterList(details.data.results)

    }

    useEffect(() => {

        characterListFetch();
    
      }, [])

  return (
    <>
        <Container className='text-center bg-danger text-white'>

            <h1>CHARACTERS RESULTS: </h1>

                    {
                        characterList.map(info => {
                            return (
                                <Row className='mt-3 me-5' key={info.id}>
                                    <Col sm={{ offset: 3 }} md={{ offset: 5 }}>
                                        <Card style={{ width: '18rem' }}>
                                            <Button variant='danger'><Link to={`/character/${info.name}`} className="white">{info.name}</Link></Button>
                                            <br />
                                            <Card.Img variant="top" alt='Character' src={`${info.thumbnail.path}.jpg`} className="result-thumbnail" />
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

export default CharactersResults