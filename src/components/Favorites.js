import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import allActions from '../actions';

const Favorites = () => {

    const dispatch = useDispatch();

    const favorites = useSelector(state => state.favorite.favorites)

    const disableBtn = useSelector(state => state.favorite.disableUndo)

    // console.log(disableBtn)

    // console.log(favorites)

    const handleDelete = (id) => {

        dispatch(allActions.deleteFavoriteAction(id))

    }

    const handleUndo = () => {

        dispatch(allActions.undoDeleteFavoriteAction())

    }

    return (
        <>
            <br />
            <div className='centaur'>
                {
                    disableBtn === false
                    ?
                    <Button onClick={handleUndo}>Undo Delete</Button>
                    :
                    <Button disabled>Undo Delete</Button>
                }
            </div>
            <br />
            <div className='centaur'>
                {
                    favorites.length === 0
                    ?
                    <div style={{ backgroundColor: 'red', margin: '5vw', color: 'white', fontSize: '20px' }}>
                        <b>'Set Characters, Comics, Creators, Events, and Series to "Favorite" to view them here'</b>
                    </div>
                    :
                    favorites.sort((a, b) => a.id - b.id).map(info => (
                        <Card style={{ width: '18rem', display: 'inline-flex', margin: '1vw' }} key={info.id}>
                            <Card.Img variant="top" src={`${info.image}.jpg`} />
                            <Card.Body>
                                <Card.Title>{info.name}</Card.Title>
                                <Button variant="danger"><Link to={`/${info.category}/${info.name}`} className="white">View '{info.name}'</Link></Button>
                                <br /><br />
                                <Button onClick={() => handleDelete(info.id)} variant="danger">Delete</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </>
    )
}

export default Favorites