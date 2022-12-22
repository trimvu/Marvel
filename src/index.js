import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Characters from './components/Characters'
import CharactersResults from './components/CharactersResults';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
    <Router>
      {/* <BaseLayout> */}
        <Routes>
          <Route path='/' element={<App /> } />
          <Route path='/characters-results/:search' element={<CharactersResults /> } />
          <Route path='/character/:character' element={<Characters /> } />
        </Routes>
      {/* </BaseLayout> */}
    </Router>
  // </Provider>
);

