import React, { useState, useEffect, useRef } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Col, Row } from 'react-bootstrap';
import { getTranslate } from './apiCalls';
import { API_BASE_URL } from './apiCalls';


function App() {

  const [to, setTo] = useState({ name: 'English', code: 'EN' });
  const [from, setFrom] = useState({ name: 'Turkish', code: 'TR' });
  const [data, setData] = useState([]);
  const [translated, setTranslated] = useState("");


  const languages = [
    { name: 'English', code: 'EN' },
    { name: 'Turkish', code: 'TR' },
    { name: 'Spanish', code: 'ES' },
    { name: 'French', code: 'FR' }
  ];


  const onFromChange = (e) => {
    setFrom(e.value);

  }
  const onToChange = (e) => {
    setTo(e.value);
  }

  const onBodyChange = (e) => {
    const val = e.target.value;
    setData([{ original: val }]);
  }

  const fetchGetTranslate = () => {
    const sendBody = {
      data,
      from: from.code,
      to: to.code
    }
    console.log("last", sendBody)
    fetch(API_BASE_URL, {
      method: "POST",
      body: JSON.stringify(sendBody),
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setTranslated(result.data[0]?.translated);
        },
        (error) => {
          console.log(error)
        }
      )
  }

  useEffect(() => {

  }, [])



  const handleTranslate = async () => {
    try {
      const { data } = await getTranslate();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitButton = () => {
    console.log("from:", from);
    console.log("to:", to);
    console.log("body:", data);
    fetchGetTranslate();
  }

  const onGithubButton = (e) => {
    window.open("https://github.com/burakfircasiguzel/");
  }

  return (
    <div className="surface-0 text-700 text-center">

      <div className="text-900 font-bold text-5xl mb-3">BF Translate</div>
      <div className="text-450 font-bold text-sm  mb-3">This application does not use any Translate NPM packages (Google Translate, Yandex etc.). <br /> It works directly with the API written on Google Apps Script.</div>
      <div className="text-450 font-bold text-sm  mb-3">You can read this related blog on <a href="https://medium.com/@burakfguzel/how-to-create-your-own-google-translate-api-bb65771b980b" target="_blank">Medium</a><i className="pi pi-align-left px-2"></i></div>
      <h5>v1.0</h5>
      <Row>
        <Col mx="auto">
          <Dropdown value={from} options={languages} onChange={onFromChange} optionLabel="name" placeholder="From" />
          <Dropdown value={to} options={languages} onChange={onToChange} optionLabel="name" placeholder="To" />

        </Col>
      </Row>

      <InputTextarea rows={5} cols={30} onChange={onBodyChange} placeholder="..." />
      <InputTextarea rows={5} cols={30} value={translated} />
      <br></br>
      <Button label="Translate" aria-label="Submit" className="p-button" onClick={onSubmitButton} />
      <br />

  
      <Button className="github p-0 p-button-secondary mt-3" aria-label="Discord" onClick={onGithubButton}>
        <i className="pi pi-github px-2"></i>
        <span className="px-3">github.com/burakfircasiguzel</span>
      </Button>
      <h6 className="text-101  mt-3"></h6>
    </div>
  );
}

export default App;
