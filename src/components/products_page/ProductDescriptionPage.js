import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import FooterSection from '../FooterSection';
import NavigationBar from '../NavigationBar';
 
function ProductDescriptionPage(props) {
    return (
      <>
      <div>
         <Container>
        <NavigationBar path="products"/>
        </Container>
         <Container> 
           <Row>
               <Col className = "col-md-3">
                      <Image fluid src={props.image} 
                      style={{maxWidth: "200px" , maxHeight: "200px" , margin: "auto auto" , display : 'flex'}}
                      className = "pt-3 pb-3"
                      />
               </Col>
               <Col className = "col-md-9 mt-4">
                       <div className = "h2" style = {{color:"#272343" , margin : "10px"}}>
                           <p>{props.name}</p>
                       </div>
               </Col>
           </Row>    
               <div className = "h2 mt-4" style = {{textAlign: "center",padding: "5rem"}}>Features</div>

           <Row>

           </Row>
         </Container> 
         
      </div>
          <FooterSection />
      </>
    )
}

export default ProductDescriptionPage
