import {Container,Row,Col} from 'react-bootstrap';
import CardElement from './CardElement';
import TeamData from "../data/Team.json";
import classes from "./CardCarousel.module.css";

const  CardCarousel = () => {   
   return (
  <div className={"centered "+classes.card_carousel}>
      <Container>
          <h1>Team</h1>
          <Row>
          {TeamData.map((item) => {
              return (
               <Col lg="4" key={item.id}> <CardElement name={item.name} role={item.role} url={item.url}  description={item.description}  /></Col>
              );
          })}
          </Row>
      </Container>
  </div>
  )
}
 
export default CardCarousel;
