import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Cards from './Card';

const AllCards = (props) => {
    return (
        <Row style={allCarsDiv}>
            <Col span={24}>
                <p style={eventText}>250+ Events</p>
            </Col>
            <Col span={24}>
                <Cards
                    isLoading={props.isLoading}
                    data={props.data}
                    showPastEvent={props.showPastEvent}
                    showCurrentEvent={props.showCurrentEvent}
                    dataVisible={props.dataVisible}
                    showMoreHandle={props.showMoreHandle}
                />
            </Col>
        </Row>
    )
}

export default AllCards;

const allCarsDiv = {
    marginTop: '80px'
}

const eventText = {
    color: '#141B25',
    fontFamily: 'Nunito',
    fontSize: '36px',
    fontWeight: 700,
    marginBottom: '10px'
}
