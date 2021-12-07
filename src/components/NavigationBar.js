import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from 'react-bootstrap';
import logo from '../assets/images/logo.png';

const NavigationBar = (props) => {
  const imgStyle = {
    height: "3.5rem",
    marginRight: "30rem"
  }
  return (
    <div className="App">
     <Container> 
      <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand><img src={logo} style={imgStyle} alt="logo"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/" style={(props.path==="home") ? {color: 'rgba(255, 230, 0, 0.89)'} : {}}>Home</Nav.Link>
              <Nav.Link href="/products" style={(props.path==="products") ? {color: 'rgba(255, 230, 0, 0.89)'} : {}}>Products</Nav.Link>
              <Nav.Link href="/services" style={(props.path==="services") ? {color: 'rgba(255, 230, 0, 0.89)'} : {}}>Services</Nav.Link>
              <Nav.Link href="/pricing" style={(props.path==="pricing") ? {color: 'rgba(255, 230, 0, 0.89)'} : {}}>Pricing</Nav.Link>
              <Nav.Link href="">
                Careers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </Container>
    </div>
  );
}

export default NavigationBar;
