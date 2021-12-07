import {Row,Col,Container} from 'react-bootstrap';
import Logo from '../assets/images/logo.png';
import classes from './FooterSection.module.css';
import FaceBook from '../assets/images/facebook.png';
import LinkedIn from '../assets/images/linkedin.png';

const FooterSection = () => {
    return (
        <div className={'centered '+classes.footer_section}>
            <Container>
                <Row>
                    <Col className="col-md-4">
                        <div className={classes.block_1}>
                        <img src={Logo} alt='logo'></img>
                        <h1>AJEYA INFOSOL</h1>
                        </div>
                    </Col>
                    <Col className="col-md-4">
                        <h6>Products</h6>
                        <ul style={{listStyleType :'none'}}>
                            <li>Home</li>
                            <li>About</li>
                            <li>Products</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </ul>
                    </Col>
                    <Col className="col-md-4">
                    <h6>Useful Links</h6>
                        <ul style={{listStyleType :'none'}}>
                            <li>Privacy Policy</li>
                            <li>Terms {'&'} Conditions</li>
                            <li>Disclaimer</li>
                            <li>Cancellation {'&'} Refund Policy</li>
                            <li>QMS {'&'} ISMS Certification</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container className={classes.block_2}>
            <Row>
                    <Col className="col-md-6">
                        <p>&copy; 2019-20 Copyright by Ajeyainfosol</p>
                    </Col>
                    <Col className={"col-md-6 "}>
                        <img className={classes.block_3} src={FaceBook} alt='FaceBook'></img>
                        <img src={LinkedIn} alt='LinkedIn' style={{marginTop: "1.5rem"}}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FooterSection;