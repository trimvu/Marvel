import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import allActions from '../actions'

import Button from 'react-bootstrap/Button';

const FavoritesButton = ({ name, image, category, marvelID }) => {

    const dispatch = useDispatch();

    const favorites = useSelector(state => state.favorite.favorites)

    console.log(favorites)

    const handleFavorite = () => {
    
        dispatch(allActions.addFavoriteAction(name, image, category, marvelID))
    
    }
    
    const handleUnfavorite = () => {
    
        dispatch(allActions.deleteFavoriteAction(filtered[0].id))
        
    }

    const filtered = favorites.filter(e => (e.marvelID === marvelID))
    
    return (
        <>
            <br />
            {
                filtered.length > 0
                ?
                <Button className='text-white bg-warning text-center' onClick={handleUnfavorite}>UNFAVORITE</Button>
                :
                <Button className='text-white bg-warning text-center' onClick={handleFavorite}>FAVORITE</Button>
            }
            <br /><br />
        </>
    )
}

export default FavoritesButton