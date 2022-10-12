import {Button,Card,Col,Form,InputGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import PaymentDetails from "./payment-details";
import PayWith from "./pay-with";

function PaymentData(props){
    return(
        <Card className="shadow mb-3 bg-white" id="payment-data">
            <Card.Header className="card-header">
                <h6 className="text-secondary mb-0 d-inline-block">
                    Payment data
                </h6>
            </Card.Header>
            <Card.Body className="card-body collapse show row">
                <Col xs={12} md={4}>
                    <PayWith/> 
                </Col>
                <Col xs={12} md={8} lg={4}>
                    <PaymentDetails/>
                </Col>  
                <Col xs={12} lg={4}>
                    <div className="mx-2 text-end pt-3">
                        <Link to="/basket#personal-data" 
                            className="btn btn-sm btn-outline-secondary rounded-pill d-inline-block d-md-none">
                            Previous
                        </Link>
                        <Button variant="secondary" size="sm" className={"rounded-pill"}>
                            Continue
                        </Button>
                    </div>   
                </Col>
            </Card.Body>
        </Card>
    );
}

export default PaymentData;