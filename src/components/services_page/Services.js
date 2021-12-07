import { Col, Container, Row } from "react-bootstrap";
import Service from "./services.png";
import UX from "./UX.png";
import Cyber from "./Cyber Security.png";
import Web from "./Web app dev.png";
import Digital from "./Digital marketing.png";
import Infra from "./Infrastructure.png";
import './Services.css';
import NavigationBar from "../NavigationBar";
import FooterSection from "../FooterSection";

const Services = () => {
    return (
        <div>
        <Container>
            <NavigationBar path="services" />
        </Container>
        <Container style={{padding: "3rem"}}>
            <Row><h1 style={{textAlign: "center",padding: "3rem"}}>Our Services</h1></Row>
            <Row>
                <Col>
                    <img alt="img" src={Service} width="750px" height="457.93px" style={{margin: "0rem 8rem"}} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <img alt="img" src={Web} width="300px" height="300px" />
                </Col>
                <Col>
                    <div className="desc1">
                        WEB APPLICATION DEVELOPMENT
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="desc2">
                        CYBER SECURITY
                    </div>
                </Col>
                <Col>
                    <img alt="img" src={Cyber} width="300px" height="300px" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <img alt="img" src={UX} width="300px" height="300px" />
                </Col>
                <Col>
                    <div className="desc1">
                        UI/UX DESIGN
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="desc2">
                        DIGITAL MARKETING
                    </div>
                </Col>
                <Col>
                    <img alt="img" src={Digital} width="300px" height="300px" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <img alt="img" src={Infra} width="300px" height="300px" />
                </Col>
                <Col>
                    <div className="desc1">
                        INFRASTRUCTURE
                    </div>
                </Col>
            </Row>
        </Container>
        <FooterSection />
        </div>
    );
}

export default Services;