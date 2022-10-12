import {Link} from "react-router-dom";
import {Col,Container,Image,Row} from "react-bootstrap";

function IndexS1(){
    return(        
        <Container fluid className="index-s1 minh-100vh d-flex align-items-center py-5">
            <Row className="row w-100 mx-0">
                <Col xs={12} md={7} className="minh-50vh"></Col>
                <Col xs={10} md={5} className="mx-auto d-flex align-items-center">
                    <div className="text-center text-md-start">
                        <Image className="navbar-logo" src="img/navbar_logo.png" alt="logo"/>
                        <h1 className="display-3">Lorem ipsum</h1>
                        <p className="">
                            Fusce suscipit, neque vel tincidunt sollicitudin, libero magna laoreet massa, 
                            eu pretium leo eros at mauris. Phasellus a lacus ipsum. Maecenas dapibus nisi 
                            ac fringilla pretium.
                        </p>
                        <div className="w-100 text-center text-md-start mt-2">
                            <Link to="/products" className="btn btn-secondary rounded-pill">
                                See more
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container> 
    );
}

export default IndexS1;