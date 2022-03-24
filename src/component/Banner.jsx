import React from 'react';
import { Row, Col, Input, Select } from 'antd';
import 'antd/dist/antd.css';
import '../App.css';

const { Option } = Select;

const Banner = (props) => {


    return (
        <div style={bannerDiv}>
            <Row>
                <Col span={14}>
                    <h1 style={eventText}>Events</h1>
                    <p style={eventSubText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                        luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent
                        elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam
                        quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
                    </p>
                </Col>
                <Col span={2}>
                </Col>
                <Col xs={{ span: 4 }}
                    lg={{ span: 6 }}
                    xxl={{ span: 8 }}>
                    <img src="../images/Group 3840.png" alt="logo" />
                </Col>
            </Row>
            <Row style={searchDiv}>
                <Col span={10}>
                    <p style={searchText}>Search</p>
                    <Input
                        placeholder="Search"
                        onChange={props.handleSearchChange}
                        value={props.search}
                        onKeyPress={props.keyPressed}
                        style={searchInput}
                    />
                    <img src="../images/Group 3815.png" alt="logo" onClick={props.handleChargeSubmit} style={searchImage} />
                </Col>
                <Col span={3}></Col>
                <Col span={10}>
                    <p style={searchText}>Past Event</p>
                    <Select name="Past Event"
                        style={{ width: '250px', marginTop: '10px', borderRadius: '5px', }}
                        onChange={props.handleChange}
                        placeholder="Past Event"
                    >
                        <Option value="true">True</Option>
                        <Option value="false">False</Option>
                    </Select>
                </Col>
            </Row>
        </div>
    )
}

export default Banner;

const bannerDiv = {
    marginTop: '50px',
    background: '#FFDBA6',
    padding: '50px',
    borderRadius: '50px',
    position: 'relative'
}

const eventText = {
    color: '#572148',
    fontFamily: 'Caveat Brush',
    fontSize: '72px',
    fontWeight: 400,
    marginBottom: 0,
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
}

const eventSubText = {
    marginLeft: '50px',
    color: '#572148',
    fontFamily: 'Nunito',
    fontSize: '18px',
    fontWeight: 400,
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
}

const searchDiv = {
    position: 'absolute',
    width: '597px',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    background: '#FFFFFF',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)',
    borderRadius: '15px',
    padding: '20px 30px'
}

const searchText = {
    color: '#000000',
    fontFamily: 'Nunito',
    fontSize: '18px',
    fontWeight: 700,
    marginBottom: 0
}

const searchInput = {
    position: 'relative',
    marginTop: '10px',
    width: '250px',
    height: '35px',
    borderRadius: '5px',
}

const searchImage = {
    position: 'absolute',
    top: '25%',
    right: '-6%'
}
