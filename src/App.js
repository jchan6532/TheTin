import { Dropdown, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import './App.css';
import logo from '../src/images/logo.png'

import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Resources from './pages/resources';
import Terms from './pages/terms';

function App() {
  return (
    <div className='con'>
      <header>
        <Navbar expand="lg" className='navBar'>
          <Navbar.Brand style={{'marginLeft': '100px'}} href="/" >
            <img 
              src={logo}
              width={100}
              height={100}
              className='d-inline-block align-top'
              alt='The Tin logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav>
              <LinkContainer to="/services">
                <Nav.Link className='nav-link'>
                  <strong>Services</strong>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className='nav-link'>
                  <strong>About Us</strong>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/resources">
                <Nav.Link className='nav-link'>
                  <strong>Resources</strong>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link className='nav-link'>
                  <strong>Careers</strong>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link className='nav-link'>
                  <strong>Contact Us</strong>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/terms' element={<Terms />} />
      </Routes>

      <footer className="footer" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div><a href='/terms'>Terms and Conditions</a></div>
        <span className='text-right'>© 2022 TheTin. All rights reserved.</span>
        <Navbar expand="lg" className='navBar' style={{backgroundColor: 'white'}}>
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav>
              <Nav.Link rel="nooperner noreferrer" className='nav-link' href="https://www.facebook.com">
                FaceBook
              </Nav.Link>
              <Nav.Link rel="nooperner noreferrer" className='nav-link' href="https://www.twitter.com">
                Twitter
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </footer>
    </div>
  );
}

export default App;
