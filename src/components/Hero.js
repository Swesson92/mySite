import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Hero(){
    return(
       
       <Jumbotron>
           <Container>
               <Row>
                   <Col>
                        <h2>Testing</h2>
                   </Col>
               </Row>
           </Container>
       </Jumbotron>
    );
}

export default Hero;