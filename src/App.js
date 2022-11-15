import React, { useState, useEffect, useRef } from 'react';

import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

import { Dropdown } from 'primereact/dropdown';
import { Col, Row } from 'react-bootstrap';
import { getTranslate } from './apiCalls';

function App() {

  const [selectedCity1, setSelectedCity1] = useState(null);
  const cities = [
    { name: 'English', code: 'EN' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  const onCityChange = (e) => {
    setSelectedCity1(e.value);
  }

  useEffect(() => {
handleTranslate();
  }, [])


  const exampleData = {
    "data": [
      {
        "original": "Hello, My name is Burak"
      },
      {
        "original": "I'm a software developer"
      },
      {
        "original": "Some words: Car, Forest, City, Desk"
      }
    ],
    "from": "EN",
    "to": "ES"
  };

  const handleTranslate = async () => {
    try {
      const { data } = await getTranslate();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="surface-0 text-700 text-center">

      <div className="text-900 font-bold text-5xl mb-3">BF Translate</div>
      <h5>v1.0</h5>
      <Row>
        <Col mx="auto">
          <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="From" />
          <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="To" />

        </Col>
      </Row>

      <InputTextarea rows={5} cols={30} />
      <InputTextarea rows={5} cols={30} />
      <br></br>
      <Button label="Translate" aria-label="Submit" className="p-button" />
    </div>
  );
}

export default App;
