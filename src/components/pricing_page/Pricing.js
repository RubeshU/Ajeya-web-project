import Logo from './logo.png';
import Sales from './sales';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import NavigationBar from "../NavigationBar";
import Image from 'react-bootstrap/Image'
import FooterSection from '../FooterSection';
import './Pricing.css';

const Pricing = () => {
    return ( 
        <>
            <Container>
            <NavigationBar path="pricing"/>
                </Container>
        <Container style = {{maxHeight: "200vh"}} className = "my-4">
           
        <Col>
          <Row>
            <Col className = "col-md-2 mb-4" style = {{display : 'flex' , flexDirection : 'Column' , justifyContent : 'center'}}><Image fluid src = {Logo} alt = "i-spark"/></Col>
            <Col className="h1 col-md-9" style = {{display : 'flex' , flexDirection : 'Column' , justifyContent : 'center'}}>i-Spark Pricing</Col>
          </Row> 
          <Row style = {{display : 'flex' , flexDirection : 'Row' , justifyContent : 'spaceBetween'}} >   
                <Col className = "mb-4"><Sales title = "Sales" cost = "1000" f1 = "Cloud Hosting" f2 = "Lead Tracking" f3 = "Payment Tracking" f4 = "Performance Tracking" f5 = "Email Campaign" f6 = "Rich MIS Reports"/></Col>
                <Col className = "mb-4"><Sales title = "Sales and Services" cost = "1500" f1 = "Cloud Hosting" f2 = "SMS and WhatsApp Plugin Excluded" f3 = "AMC Tracker" f4 = "Signal Sign on for accessing both sales and services" f5 = "360 deg customer experience tracking" f6 = "Manage Customer Accounts"/></Col>
                <Col className = "mb-4"><Sales title = "Service" cost = "1000" f1 = "Cloud Hosting" f2 = "SMS & WhatsApp Plugin Excluded" f3 = "Campaign Management" f4 = "Ticket Management" f5 = "Customer Feedback Survey" f6 = "Rich MIS Reports"/></Col>
          </Row>
        </Col>        
        </Container>    
        <FooterSection></FooterSection>
        </>
     );
}
 
export default Pricing;