import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Characters from './components/Characters'
import CharactersResults from './components/CharactersResults';
import BaseLayout from './components/layout/BaseLayout';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import rootReducer from './reducers/reducer';

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
        </Routes>
      </BaseLayout>
    </Router>
  </Provider>
);

