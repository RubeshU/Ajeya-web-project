import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import JumboImg from '../../assets/images/logo.png';
import {useNavigate} from 'react-router';


function CardComponent(props) {
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate('/product-description-page');
    }
    return (
        <div style={{margin : "50px"}}>
     
            <Card style = {{boxShadow : "10px 5px 10px #BBBBBB",}}>
               <Row>
                   <Col className = "col-md-3">
                      <Image fluid src={JumboImg} 
                      style={{maxWidth: "200px" , maxHeight: "200px" , margin: "auto auto" , display : 'flex'}}
                      className = "pt-3 pb-3"
                      />
                   </Col>
                   <Col className = "col-md-9 mt-4">
                       <div className = "h2" style = {{color:"#272343" , margin : "10px"}}>
                           <p>{props.name}</p>
                       </div>
                       
                       <Button onClick={onClickHandler} variant = "warning" style = {{margin : "10px" }}>View More</Button>
                   </Col>
                </Row>
            </Card>
        </div>
    )
}

export default CardComponent;
