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

const CharactersResults = () => {

    const API_KEY = process.env.REACT_APP_API_KEY

    // const [name, setName] = useState();
    // const [image, setImage] = useState();
    const [characterList, setCharacterList] = useState([])

    const [total, setTotal] = useState(0)

    let {search} = useParams();

    const dispatch = useDispatch();
    const items_characters_results = useSelector(state => state.charactersResults.items_characters_results)

    let count = items_characters_results / 10

    const characterListFetch = async () => {

        const data = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&orderBy=name&apikey=${API_KEY}&limit=10&offset=${items_characters_results}`)

        const details = await data.json();

        // console.log(details.data)

        setCharacterList(details.data.results)
        setTotal(Math.ceil((details.data.total)/10))

    }

    useEffect(() => {

        characterListFetch();
    
      }, [items_characters_results])

  return (
    <>
        <br />
        <Container className='text-center text-white'>

            <h1 className='red-bg'>CHARACTERS RESULTS: </h1>

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
            {/* {count+1} of {total} */}
            <Row>
                <Col>
                    <Button variant='danger' onClick={() => dispatch(allActions.decrementCharactersResultsAction(10))} >Back</Button>
                    <Button variant='danger' disabled>{count+1} of {total}</Button>
                    <Button variant='danger' onClick={() => dispatch(allActions.incrementCharactersResultsAction(10))} >More</Button>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default CharactersResults