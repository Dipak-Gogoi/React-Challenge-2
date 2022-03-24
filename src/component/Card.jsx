import React from 'react';
import { Row, Col, Card, } from 'antd';
import { InfoCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const Cards = (props) => {
    const ticket = (value) => {
        if (value.is_free === true) {
            return <>Free</>
        }
        else {
            return <>Paid</>
        }
    }

    const eventMode = (value) => {
        if (value.is_virtual === true) {
            return <>Online</>
        }
        else {
            return <>Offline</>
        }
    }

    const eventCard = (value) => {
        return (
            <Col className="gutter-row" style={cardDiv} xs={{ span: 4 }}
                lg={{ span: 6 }}
                xxl={{ span: 8 }}>
                <Card
                    hoverable
                    style={cardStyle}
                    cover={
                        <>
                            <img alt="logo" src="../images/Rectangle 17.png" style={mainImage} />
                            <img alt="logo" src="../images/Rectangle 20.png" style={iconImage} />
                        </>
                    }
                >
                    <Row>
                        <Col xs={{ span: 20 }}
                            md={{ span: 20 }}
                            lg={{ span: 24 }}
                            xxl={{ span: 24 }}>
                            <p style={eventName}>{value.name}</p>
                        </Col>
                        <Col
                            xs={{ span: 12 }}
                            md={{ span: 12 }}
                            lg={{ span: 14 }}
                            xl={{ span: 16 }}
                            xxl={{ span: 20 }}>
                            <p style={subValusDiv}> <img alt="logo" src="../images/Group 463.png"
                                style={{ width: '14px', height: '14px', marginTop: '-5px' }} />
                                <span style={subValues}>Raddison Blue</span>
                            </p>
                        </Col>
                        <Col
                            xs={{ span: 12 }}
                            md={{ span: 12 }}
                            lg={{ span: 10 }}
                            xl={{ span: 8 }}
                            xxl={{ span: 4 }}>
                            <p style={subValusDiv}><InfoCircleOutlined /> <span style={subValues}>{ticket(value)} | {eventMode(value)}</span></p>
                        </Col>
                    </Row>
                </Card>
            </Col>
        );
    };

    const isTrue = props.data && props.data.length > 0 && props.data.filter((value) => value.is_past === true)
    const isFalse = props.data && props.data.length > 0 && props.data.filter((value) => value.is_past === false)


    return (
        <Row gutter={16}>
            {
                props.isLoading ?
                    <Col span={12} offset={12}>
                        <LoadingOutlined style={{ fontSize: 24 }} spin />
                    </Col>
                    :
                    props.showPastEvent ?
                        isTrue && isTrue.length > 0 ? isTrue.map((value) => (
                            eventCard(value)
                        ))
                            : <Col span={12} offset={12}>
                                <p style={noData}>No Event </p>
                            </Col>
                        : props.showCurrentEvent ?
                            isFalse && isFalse.length > 0 ? isFalse.map((value) => (
                                eventCard(value)
                            )) : <Col span={12} offset={12}>
                                    <p>No Event </p>
                                </Col>
                            : props.data && props.data.length > 0 ? props.data.map((value) => (
                                eventCard(value)
                            )) : <Col span={12} offset={12}>
                                    <p>No Event </p>
                                </Col>}
        </Row>
    )
}

export default Cards;


const cardDiv = {
    marginTop: '20px'
}

const cardStyle = {
    filter: 'drop-shadow(0px 0px 13.5679px rgba(0, 0, 0, 0.2))',
    borderRadius: '13.5679px'
}

const mainImage = {
    // width: '100%',
    // height: '170.96px',
    position: 'relative'
}

const iconImage = {
    width: '27px',
    height: '27px',
    position: 'absolute',
    top: '10px',
    left: '10px'
}

const eventName = {
    color: '#141B25',
    fontFamily: 'Prompt',
    fontSize: '16px',
    fontWeight: 600,
    marginBottom: 0
}

const subValusDiv = {
    color: '#141B25',
    fontFamily: 'Prompt',
    fontSize: '10px',
    fontWeight: 400,
    marginTop: '8px',
}

const subValues = {
    marginLeft: '5px'
}

const noData = {
    color: '#141B25',
    fontFamily: 'Prompt',
    fontSize: '16px',
    fontWeight: 600
}
