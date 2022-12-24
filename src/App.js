import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const App = () => {

  const API_KEY = process.env.REACT_APP_API_KEY

  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const fetchInput = async () => {
    // let url = `https://gateway.marvel.com:443/v1/public/characters?name=${searchInput}&orderBy=name&apikey=${API_KEY}`

    let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchInput}&orderBy=name&apikey=${API_KEY}`

    let results = await fetch(url);

    let data = await results.json();
    
    // console.log("the data:", data)

    setSearchInput(data.Search)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmittedSearchInput(searchInput)
    fetchInput(searchInput)
    console.log(searchInput)

    navigate(`/characters-results/${searchInput}`)

  }

  return (
    <>
      App
      <div>
          
          <form onSubmit={handleSubmit}>
            <select className='options'>
              <option value="grapefruit">Character</option>
              <option value="comic">Comic</option>
              <option value="events">Events</option>
              <option value="series">Series</option>
              <option value="stories">Stories</option>
            </select>
              <input type="text" className='search-bar' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} />
              <input type="submit" className='search-bar'/>
          </form>
          
      </div>
    </>
  )
}

export default App