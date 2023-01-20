import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
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
    const [total2, setTotal2] = useState(0)
    
    let {search} = useParams();

    const dispatch = useDispatch();
    const items_characters_results = useSelector(state => state.charactersResults.items_characters_results)

    const count = items_characters_results / 10

    const navigate = useNavigate();
    
    const characterListFetch = async () => {
        
        const data = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&orderBy=name&apikey=${API_KEY}&limit=10&offset=${items_characters_results}`)

        const details = await data.json();

        // console.log(details.data)
        // console.log("items_characters_results", items_characters_results)
        // console.log("total2", total2)
        
        setCharacterList(details.data.results)
        setTotal(Math.ceil((details.data.total)/10))
        setTotal2(details.data.total)
        
    }
    
    const resetIncrementFetch = () => {

        if (((total2 - items_characters_results) < 10) || ((total2 - items_characters_results) === 10)) {
            return () => dispatch(allActions.resetCharactersResultsAction(0))
        } else {
            return () => dispatch(allActions.incrementCharactersResultsAction(10))
        }

    }

    const resetDecrementFetch = () => {

        if (items_characters_results <= 0) {
            return () => dispatch(allActions.resetCharactersResultsAction(0))
        } else {
            return () => dispatch(allActions.decrementCharactersResultsAction(10))
        }

    }

    const oneOrZero = () => {

        if (total2 === 0) {
            return 0;
        } else {
            return (count + 1);
        }

    }

    // console.log('characterList', characterList.length)
        
    useEffect(() => {
            
        characterListFetch();
    
    }, [items_characters_results])

  return (
    <>
        <br />
        <Container className='text-center text-white'>

            <h1 className='red-bg'>CHARACTERS RESULTS: </h1>
            <h1 className='red-bg'>Search results for: {search}</h1>

                    {
                        characterList.length > 0
                        ?
                        characterList.map(info => {
                            return (
                                <Row className='mt-3 me-5' key={info.id}>
                                    <Col sm={{ offset: 3 }} md={{ offset: 5 }}>
                                        <Card style={{ width: '18rem' }}>
                                            <Button onClick={() => navigate(`/character/${info.name}`)} id="custom-btn" variant='danger'><Link to={`/character/${info.name}`} className="white">{info.name}</Link></Button>
                                            
                                            <Card.Img onClick={() => navigate(`/character/${info.name}`)} variant="top" alt='Character' src={`${info.thumbnail.path}.${info.thumbnail.extension}`} className="result-thumbnail" />
                                            
                                        </Card>
                                        <br />
                                    </Col>
                                </Row>
                            ) 
                        })
                        :
                        <div />
                    }
            <br />
            {/* {count+1} of {total} */}
            <Row>
                <Col>
                    <Button id='previous-btn' variant='danger' onClick={resetDecrementFetch()} >Previous</Button>
                    <Button id='amount-of-pages-btn' variant='danger' disabled>{oneOrZero()} of {total}</Button>
                    <Button id='next-btn' variant='danger' onClick={resetIncrementFetch()} >Next</Button>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default CharactersResults