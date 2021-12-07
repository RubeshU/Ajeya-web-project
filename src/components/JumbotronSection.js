import classes from './JumbotronSection.module.css';
import {Row,Col,Button,Container} from 'react-bootstrap';
import JumBoImg from '../assets/images/jumbo-img.png';

const JumbotronSection = () => {
    return (
        <div className={classes.jumbotron_section+' centered'}>
            <Container>
            <Row>
                <Col className="col-md-6 col-sm-12">
                    <h1>Ajeya Infosol</h1>
                    <h4>One stop solution for all your software needs</h4>
                    <Button variant="warning">Contact</Button>
                </Col>
                <Col className="col-md-6 col-sm-12">
                    <img src={JumBoImg} alt="JumboImg"></img>
                </Col>
            </Row>
            </Container>
        </div>
    );
} 

export default JumbotronSection;