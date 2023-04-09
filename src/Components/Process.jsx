import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'


function Process() {
  return (
    <div>
        <Container fluid>
            <Row className="processrow">
                <Col>
                <div>
                <Image src='asset/icon1svg.svg'/>
                <div>
                    <h1>Choose your meal</h1>
                    <p>Start your order by choosing from our numerous menu of delicacies</p>
                </div>
                </div>
                </Col>
                <Col>
                <div >
                <div id='iconsubdiv'>
                <Image src='asset/icon2.svg'/>
                <Image src='asset/icon3.svg'/>
                </div>
                <div>
                    <h1>Select preferred purchase option</h1>
                    <p>Choose either to Pickup from our nearest restaurant or we deliver to your door step</p>
                </div>
                
                </div>
                </Col>
                <Col>
                <Image src='asset/icon4.svg' id='ls'/>
                <div id="ej">
                    <h1>Bon appétit</h1>
                    <p>Enjoy your delicious meal and do give us a feedback</p>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Process;