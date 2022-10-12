import {Card,Col,Container,Form,InputGroup,Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function ContactS3(){
    return(     
        <Container className="contact-s3 minh-50vh d-flex align-items-center py-2">
            <Row className="w-100 mx-0">
                <Col xs={12} md={6} className="py-5 mx-auto">
                    <Card className="shadow mx-auto" id="contact-data">
                        <Card.Header className="bg-light">
                            <h6 className="text-secondary mb-0 d-inline-block">
                                Personal data
                            </h6>
                        </Card.Header>
                        <Card.Body className="card-body collapse show">
                            <InputGroup size="sm" className="mb-2">
                                <InputGroup.Text className="bg-white col-4 col-md-3">
                                    First name:
                                </InputGroup.Text>
                                <Form.Control type="text" className="col-8 col-md-9 border-start-0 text-start"/>
                            </InputGroup>
                            <InputGroup className="input-group input-group-sm mb-2">
                                <InputGroup.Text className="bg-white col-4 col-md-3">
                                    Last name:
                                </InputGroup.Text>
                                <Form.Control type="text" className="col-8 col-md-9 border-start-0 text-start"/>
                            </InputGroup>
                            <InputGroup className="input-group input-group-sm mb-2">
                                <InputGroup.Text className="bg-white col-4 col-md-3">
                                    Phone:
                                </InputGroup.Text>
                                <Form.Control type="tel" className="col-8 col-md-9 border-start-0 text-start"/>
                            </InputGroup>
                            <InputGroup className="input-group input-group-sm mb-2">
                                <InputGroup.Text className="bg-white col-4 col-md-3">
                                    Email:
                                </InputGroup.Text>
                                <Form.Control type="email" className="col-8 col-md-9 border-start-0 text-start"/>
                            </InputGroup>
                            <InputGroup className="input-group input-group-sm mb-3">
                                <InputGroup.Text className="bg-white col-4 col-md-3">
                                    Message:
                                </InputGroup.Text>
                                <Form.Control as="textarea" rows={3} className="col-8 col-md-9 border-start-0 text-start"/>
                            </InputGroup>                             
                            <div className="mx-2 text-end border-top pt-3">
                                <Link to="#flight-details" 
                                    className="btn btn-sm btn-outline-secondary rounded-pill">
                                    Clear
                                </Link>
                                <Link to="#payment-data" 
                                    className="btn btn-sm btn-secondary rounded-pill">
                                    Send
                                </Link>
                            </div>   
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>      
    );
}

export default ContactS3;