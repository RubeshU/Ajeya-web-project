import QmsIsmsLogo from '../assets/images/qms-isms-logo.png';
import {Row,Col,Container} from 'react-bootstrap';
import classes from './QmsIsmsSection.module.css';

const QmsIsmsSection = () => {
    return (
        <div className={'centered '+classes.qms_isms_section}>
            <Container>
                <h1>QMS/ISMS</h1>
                <Row>
                    <Col lg="6">
                        <img src={QmsIsmsLogo} alt='qms-isms-logo'>
                        </img>
                    </Col>
                    <Col lg="6">
                        <p>
                            We are now ‘Quality Management System (ISO 9001:2015) and Information 
                             Management System (ISO/IEC 27001:2013) certified under the accreditation 
                             of JAS ANZ based on IAF framework for all our delivery functions and support 
                             functions. This is our commitment and assurance to our customers and partners
                              on our Quality Process and Data Protection.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default QmsIsmsSection;