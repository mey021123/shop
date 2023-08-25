import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data.js';
import Product from './Product';

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
          {shoes.map((shoe) => (
            <Product key={shoe.id} id={shoe.id} title={shoe.title} price={shoe.price} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
 