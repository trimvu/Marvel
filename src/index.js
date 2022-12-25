import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';

import Characters from './components/Characters'
import CharactersResults from './components/CharactersResults';
import ComicResults from './components/ComicResults';
import Comic from './components/Comic';
import Events from './components/Events';
import EventsResults from './components/EventsResults';
import Series from './components/Series';
import SeriesResults from './components/SeriesResults';
import Stories from './components/Stories';
import StoriesResults from './components/StoriesResults';

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

