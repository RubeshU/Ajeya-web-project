import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const sales = (props) => {
    return (  
        <div className = "Sales">
        <Card style = {{borderRadius : '10px !important', borderColor : '#FFD803' }}>
           <Col>
              <div className="h4" style={{background : '#FFD803' , padding : '5px' , textAlign : 'center' , color : "#272343"}}> {props.title} </div>
              <h1 style = {{textAlign : "center"}}>₹ {props.cost} <h5>per user</h5> </h1>
              <Col  style = {{ alignSelf : "center" , margin : "1px 50px"}}>
                  <p style={{background : '#FFED88', borderRadius : '6px' , padding : '5px' , textAlign : 'center' , color : "#272343"}}>{props.f1}</p>
                  <p style={{background : '#FFED88', borderRadius : '6px' , padding : '5px' , textAlign : 'center' , color : "#272343"}}>{props.f2}</p>
                  <p style={{background : '#FFED88', borderRadius : '6px' , padding : '5px' , textAlign : 'center' , color : "#272343"}}>{props.f3}</p>
                  <p style={{background : '#FFED88', borderRadius : '6px' , padding : '5px' , textAlign : 'center' , color : "#272343"}}>{props.f4}</p>
                  <p style={{background : '#FFED88', borderRadius : '6px' , padding : '5px' , textAlign : 'center' , color : "#272343"}}>{props.f5}</p>
                  <p style={{background : '#FFED88', borderRadius : '6px' , padding : '5px' , textAlign : 'center' , color : "#272343"}}>{props.f6}</p>
              </Col>
           </Col>
        </Card>
        </div>
    );
}
 
export default sales;