import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const App = () => {

  // const API_KEY = process.env.REACT_APP_API_KEY

  const [searchInput, setSearchInput] = useState("");
  const [optionValue, setOptionValue] = useState("")

  const navigate = useNavigate();

  // const fetchInput = async () => {
  //   // let url = `https://gateway.marvel.com:443/v1/public/characters?name=${searchInput}&orderBy=name&apikey=${API_KEY}`

  //   let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchInput}&orderBy=name&apikey=${API_KEY}`

  //   let results = await fetch(url);

  //   let data = await results.json();
    
  //   // console.log("the data:", data)

  //   setSearchInput(data.Search)

  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmittedSearchInput(searchInput)
    // fetchInput(searchInput)
    // console.log(searchInput)

    navigate(`/${optionValue}-results/${searchInput}`)

  }

  return (
    <>
      App
      <div>
          
          <form onSubmit={handleSubmit}>
            <select className='options' onChange={(e) => setOptionValue(e.target.value)}>
              <option disabled selected hidden>Choose Category</option>
              <option value="characters">Character</option>
              <option value="comic">Comic</option>
              <option value="creators">Creators</option>
              <option value="events">Events</option>
              <option value="series">Series</option>
            </select>
              <input type="text" className='search-bar' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} required/>
              <input type="submit" className='search-bar'/>
          </form>
          
      </div>
    </>
  )
}

export default App