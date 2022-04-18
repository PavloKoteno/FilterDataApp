
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import data from '../../resources/json.json';
import Page from '../Page/Page';
import './App.css';

function App() {
  const { data: { timelogs: { nodes } } } = data;

  return (
    <div className="container">
      <Row>
        <Col lg={{ span: 10, offset: 1 }}>
          <h1 className="text-center">Timelogs</h1>
          <Page nodes={nodes} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
