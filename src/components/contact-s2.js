import {Col,Container,Image,Row} from "react-bootstrap";

function ContactS2(){
    return(             
        <Container fluid className="contact-s2 minh-25vh d-flex align-items-center py-5">
            <Row className="w-100 mx-0">
                <Col xs={12} md={7} className="minh-25vh"></Col>
                <Col xs={10} md={5} className="mx-auto d-flex align-items-center">
                    <div>
                        <Image className="navbar-logo" src="img/navbar_logo.png" alt="logo"/>
                        <h1 className="display-3">Lorem ipsum</h1>
                        <p className="">
                            Fusce suscipit, neque vel tincidunt sollicitudin, libero magna laoreet massa, 
                            eu pretium leo eros at mauris. Phasellus a lacus ipsum. Maecenas dapibus nisi 
                            ac fringilla pretium.
                        </p>
                        <address>
                            Fusce suscipit<br/>
                            neque vel tincidunt<br/>
                            pretium leo<br/>
                            Phasellus a lacus
                        </address>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactS2;