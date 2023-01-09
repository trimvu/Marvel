import React from 'react'
import { Link } from 'react-router-dom'

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

// import './Footer.css'

// import { FaGithub, FaLinkedin, FaFingerprint } from 'react-icons/fa'

import './Header.css';

const Header = () => {
  return (
    <>
      {/* <Container className='text-center .fs-1 color:white' id='header-bg'> */}
        {/* <Row> */}
        <div className='header'>
          
              
              <Link to="/" className='white'>Home</Link>
              {/* <a>Home</a> */}
              
          
        </div>
        {/* </Row> */}
      {/* </Container> */}
    </>
  )
}

export default Header