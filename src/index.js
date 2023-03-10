import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index.scss'
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';

import Characters from './components/characters/Characters'
import CharactersResults from './components/characters/CharactersResults';
import Comic from './components/comic/Comic';
import ComicResults from './components/comic/ComicResults';
import Creators from './components/creators/Creators';
import CreatorsResults from './components/creators/CreatorsResults';
import Events from './components/events/Events';
import EventsResults from './components/events/EventsResults';
import Series from './components/series/Series';
import SeriesResults from './components/series/SeriesResults';

import {Provider} from 'react-redux';
import {createStore} from 'redux'
import rootReducer from './reducers/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import Favorites from './components/Favorites';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path='/' element={<App /> } />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/characters-results/:search' element={<CharactersResults /> } />
          <Route path='/character/:character' element={<Characters /> } />
          <Route path='/comic-results/:search' element={<ComicResults /> } />
          <Route path='/comic/:comic' element={<Comic /> } />
          <Route path='/creators-results/:search' element={<CreatorsResults /> } />
          <Route path='/creators/:creators' element={<Creators /> } />
          <Route path='/events-results/:search' element={<EventsResults /> } />
          <Route path='/events/:events' element={<Events /> } />
          <Route path='/series-results/:search' element={<SeriesResults /> } />
          <Route path='/series/:series' element={<Series /> } />
        </Routes>
      </BaseLayout>
    </Router>
  </Provider>
);

