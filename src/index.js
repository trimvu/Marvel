import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';

import Characters from './components/characters/Characters'
import CharactersResults from './components/characters/CharactersResults';
import Comic from './components/comic/Comic';
import ComicResults from './components/comic/ComicResults';
import Events from './components/events/Events';
import EventsResults from './components/events/EventsResults';
import Series from './components/series/Series';
import SeriesResults from './components/series/SeriesResults';
import Stories from './components/stories/Stories';
import StoriesResults from './components/stories/StoriesResults';

import {Provider} from 'react-redux';
import {createStore} from 'redux'
import rootReducer from './reducers/index';

import 'bootstrap/dist/css/bootstrap.min.css';

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
          <Route path='/characters-results/:search' element={<CharactersResults /> } />
          <Route path='/character/:character' element={<Characters /> } />
          <Route path='/comic-results/:search' element={<ComicResults /> } />
          <Route path='/comic/:comic' element={<Comic /> } />
          <Route path='/events-results/:search' element={<EventsResults /> } />
          <Route path='/events/:events' element={<Events /> } />
          <Route path='/series-results/:search' element={<SeriesResults /> } />
          <Route path='/series/:series' element={<Series /> } />
          <Route path='/stories-results/:search' element={<StoriesResults /> } />
          <Route path='/stories/:stories' element={<Stories /> } />
        </Routes>
      </BaseLayout>
    </Router>
  </Provider>
);

