import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes] = useState(data);
  console.log(shoes[0].title);
  
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{ backgroundImage : 'url(' + bg + ')' }}/>

      <div className='container'>
        <div className='row'>
        <div className='col-md-4'>
          <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='80%'/>
          {/* <h4>{shoes[0].title}</h4> */}
          <p>상품설명</p>
        </div>
        <div className='col-md-4'>
          <img src='https://codingapple1.github.io/shop/shoes2.jpg' width='80%'/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className='col-md-4'>
          <img src='https://codingapple1.github.io/shop/shoes3.jpg' width='80%'/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        </div>
      </div>

    </div>
  );
}

export default App;
 