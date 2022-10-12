import {Col,Container,Row} from "react-bootstrap";
import OrderDetails from "./order-details";
import PaymentData from "./payment-data";
import PersonalData from "./personal-data";

function BasketS2(){
    return(
        <Container fluid className="basket-s2 minh-75vh d-flex align-items-start py-5">
            <Row className="w-100 mx-0 mt-5">
                <Col xs={12} md={6}>
                    <OrderDetails/>
                </Col>
                <Col xs={12} md={6}>                    
                    <PersonalData/>
                </Col>
                <Col xs={12}>   
                    <PaymentData/>
                </Col>
            </Row>
        </Container>   
    );
}
export default BasketS2;