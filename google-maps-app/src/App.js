// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import GoogleMapComponent from './GoogleMap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="mt-5">
          <Col>
            <h1 className="text-center">Welcome to My Google Maps App</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="d-flex justify-content-center">
            <GoogleMapComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
