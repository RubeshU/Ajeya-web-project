import classes from './AboutUsSection.module.css';
import {Row,Col,Container} from 'react-bootstrap';
import AboutUsImg from '../assets/images/about-us-img.png';

const AboutUsSection = () => {
    return (
        <div className={classes.about_us_section+ " centered"}>
            <Container>
            <Row>
                <Col lg="6" sm="12">
                    <img src={AboutUsImg} alt="AboutUsImg"></img>
                </Col>
                <Col lg="6" sm="12" className={classes.center_content}>
                    <h1>
                        About Us
                    </h1>
                    <h4>
                        Ajeya Infosol provides a multitude of services including IT infrastructure, web designing,
                        mobile designing,security audits and so on.
                    </h4>
                </Col>
            </Row>
            </Container>
        </div>
    );
}

export default AboutUsSection;