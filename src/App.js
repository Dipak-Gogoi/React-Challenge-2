import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Row, Col } from 'antd';
import Header from './component/Header';
import Banner from './component/Banner';
import AllCards from './component/AllCards';

function App() {
  const [data, setData] = useState([]);
  const [dataVisible, setDataVIsible] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState();
  const [showPastEvent, setShowPastEvent] = useState(false)
  const [showCurrentEvent, setShowCurrentEvent] = useState(false)


  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    // fetchData(search)
  };

  const keyPressed = (e) => {
    // console.log('e', e)
    const keyCode = e.charCode || e.code;

    if (keyCode === 13 && !e.shiftKey) {
      // e.preventDefault();
      fetchData()
    }
  };

  const handleChargeSubmit = () => {
    fetchData()
  }

  const fetchData = async (value) => {
    setIsError(false);
    setIsLoading(true);

    try {
      const results = await axios("https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events", {
        params: {
          limit: 428,
          past_events: value,
          search_query: search
        }
      }, );
      setData(results.data.events);
      // console.log('data', data)
    } catch (error) {
      setIsError(true);
      setTimeout(() => setIsError(false), 10000);
    }


    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);


  const handleChange = (value) => {
    fetchData(`${value}`);

    if (`${value}` === 'true') {
      setShowPastEvent(true)
      setShowCurrentEvent(false)
    }
    if (`${value}` === 'false') {
      setShowPastEvent(false)
      setShowCurrentEvent(true)
    }
  }

  const showMoreHandle = () => {
    setDataVIsible((preValue) => preValue + 8)
  }


  return (
    <Row style={mainDiv}>
      <Col span={24}>
        <Header />
        <Banner
          handleSearchChange={handleSearchChange}
          handleChange={handleChange}
          handleChargeSubmit={handleChargeSubmit}
          keyPressed={keyPressed}
        />
        <AllCards
          isLoading={isLoading}
          data={data}
          showPastEvent={showPastEvent}
          showCurrentEvent={showCurrentEvent}
          dataVisible={dataVisible}
          showMoreHandle={showMoreHandle}
        />
      </Col>
    </Row>
  );
}

export default App;

const mainDiv = {
  padding: '20px 60px',
}
