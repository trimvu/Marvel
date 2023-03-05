import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import allActions from './actions'

const App = () => {

  // const API_KEY = process.env.REACT_APP_API_KEY

  const [searchInput, setSearchInput] = useState("");
  const [optionValue, setOptionValue] = useState("characters");

  const navigate = useNavigate();

  // const fetchInput = async () => {
  //   // let url = `https://gateway.marvel.com:443/v1/public/characters?name=${searchInput}&orderBy=name&apikey=${API_KEY}`

  //   let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchInput}&orderBy=name&apikey=${API_KEY}`

  //   let results = await fetch(url);

  //   let data = await results.json();
    
  //   // console.log("the data:", data)

  //   setSearchInput(data.Search)

  // }

  const dispatch = useDispatch();
  const items_series_results = useSelector(state => state.seriesResults.items_series_results)

  const loadReset = () => {
    dispatch(allActions.resetCharactersResultsAction(0));
    dispatch(allActions.resetComicResultsAction(0));
    dispatch(allActions.resetCreatorsResultsAction(0));
    dispatch(allActions.resetEventsResultsAction(0));
    dispatch(allActions.resetSeriesResultsAction(0));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmittedSearchInput(searchInput)
    // fetchInput(searchInput)
    // console.log(searchInput)

    navigate(`/${optionValue}-results/${searchInput}`)

  }

  const handleChange = (e) => {
    e.preventDefault();

    const selectedOption = e.target.value;

    setOptionValue(selectedOption)
  }

  useEffect(() => {
    loadReset();
  }, [])

  return (
    <>
      {/* App */} <br />
      <div className='search-div'>
          
          <form className='search-bar' onSubmit={handleSubmit}>
            <select className='select-font' onChange={handleChange}>
              <option value="characters" disabled selected hidden>Choose Category</option>
              <option value="characters">Character</option>
              <option value="comic">Comic</option>
              <option value="creators">Creators</option>
              <option value="events">Events</option>
              <option value="series">Series</option>
            </select> <br /><br />
              <input type="text" placeholder='Search...' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} required/> <br /><br />
              <input className='submit-font' type="submit" />
          </form>
          
      </div>
    </>
  )
}

export default App