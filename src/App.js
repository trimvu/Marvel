import React, { useState } from 'react'
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

  return (
    <>
      {/* App */} <br />
      <div className='search-div'>
          
          <form className='search-bar' onSubmit={handleSubmit}>
            <select className='select-font' onChange={handleChange}>
              <option value="characters" disabled selected hidden>Choose Category</option>
              <option value="characters" onChange={() => dispatch(allActions.resetCharactersResultsAction(0))}>Character</option>
              <option value="comic" onChange={() => dispatch(allActions.resetComicResultsAction(0))}>Comic</option>
              <option value="creators" onChange={() => dispatch(allActions.resetCreatorsResultsAction(0))}>Creators</option>
              <option value="events" onChange={() => dispatch(allActions.resetEventsResultsAction(0))}>Events</option>
              <option value="series" onChange={() => dispatch(allActions.resetSeriesResultsAction(0))}>Series</option>
            </select> <br /><br />
              <input type="text" placeholder='Search...' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} required/> <br /><br />
              <input className='submit-font' type="submit" />
          </form>
          
      </div>
    </>
  )
}

export default App