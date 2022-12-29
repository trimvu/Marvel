import React from 'react'
import {Link} from 'react-router-dom'

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <>
      <Container className='text-center bg-danger .fs-1 color:white'>
        <Row>
          <ul>
              
              <li> <Link to="/">Home</Link> </li>
              
          </ul>
        </Row>
      </Container>
    </>
  )
}

export default Header