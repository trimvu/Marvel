import React from 'react'
import { Link } from 'react-router-dom'

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import './Header.css';

const Header = () => {
  return (
    <>
      <Container className='text-center .fs-1 color:white' id='header-bg'>
        <Row>
          <ul>
              
              <li> <Link to="/" className='white'>Home</Link> </li>
              
          </ul>
        </Row>
      </Container>
    </>
  )
}

export default Header