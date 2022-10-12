import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function OrderDetails(props){
    return(
        <Card className="card shadow mb-3 bg-white" id="order-details">
            <Card.Header className="card-header">
                <h6 className="text-secondary mb-0 d-inline-block">
                    Order details
                </h6>
            </Card.Header>
            <Card.Body className="collapse show"> 
                <div className="product-list">

                </div>
                <div className="mx-2 text-end border-top pt-3 d-block d-md-none">
                    <Link to="#personal-data" 
                        className="btn btn-sm btn-secondary rounded-pill">
                        Next
                    </Link>
                </div>                               
            </Card.Body>
        </Card>
    );
}
export default OrderDetails;