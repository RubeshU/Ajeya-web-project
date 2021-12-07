import {Card} from 'react-bootstrap';
import classes from './CardElement.module.css';

const CardElement = (props) => {
    return (
        <div className={classes.card_element}>
            <Card style={{ width: '18rem' }} className={"border-0"}>
                <Card.Body className={classes.card_outer} style={(props.name==="Veera" || props.name==="Manikandan B" || props.name==="Rohith R")? {height: "16rem"} : {height: "28rem"}}>
                <Card.Title>
                 <div style = {{display:"flex",flexDirection:"row",justifyContent: "space-between",alignItems: "center"}}>
                     {props.name}
                 <img src={props.url} alt="prof" />
                 </div>
                 </Card.Title>
                    <Card.Text style={{fontSize: "0.8rem"}}>
                    <span style={{fontSize: "1rem",fontWeight: "bold",padding: "1rem auto"}}> {props.role} </span><br />
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
export default CardElement;