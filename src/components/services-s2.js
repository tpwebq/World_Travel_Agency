import {Button,Card,Col,Container,Form,Image,InputGroup,Row,Table} from "react-bootstrap";

function ServicesS2(){
    return(
        <Container fluid className="services-s2 minh-75vh d-flex align-items-start py-5">
            <Row className="w-100 mx-0 mt-5">
                <Col xs={12} md={4} lg={3}>
                    <Card className="shadow mb-3">
                        <Card.Header>
                            <h6 className="text-secondary mb-0 d-inline-block">
                                Search tour
                            </h6>
                            <button className="btn btn-sm float-end rotate-obj" data-bs-toggle="collapse" data-bs-target="#filters">
                                <span className="fa fa-angle-up"></span>
                            </button>
                        </Card.Header>
                        <Card.Body className="card-body collapse show" id="filters">
                            <InputGroup size="sm" className="mb-2">
                                <InputGroup.Text className="bg-white">Category:</InputGroup.Text>
                                <Form.Select className="border-start-0 text-end">
                                    <option></option>
                                </Form.Select>
                            </InputGroup>
                            <InputGroup size="sm" className="mb-2">
                                <InputGroup.Text className="input-group-text bg-white">Type:</InputGroup.Text>
                                <Form.Select className="border-start-0 text-end">
                                    <option></option>
                                </Form.Select>
                            </InputGroup>
                            <h6 className="mt-3 mb-2 text-secondary border-top pt-2">
                                Tour details:
                            </h6>
                            <InputGroup size="sm" className="mb-2 ps-3 small">        
                                <Form.Check className="text-secondary"
                                    type="checkbox"
                                    label="Hotel"/>
                            </InputGroup>   
                            <InputGroup size="sm" className="mb-2 ps-3 small">     
                                <Form.Check className="text-secondary" 
                                    type="checkbox"
                                    label="Spa"/>
                            </InputGroup>        
                            <InputGroup size="sm" className="mb-2 ps-3 small">   
                                <Form.Check className="text-secondary"
                                    type="checkbox"
                                    label="Camping in the woods"/>
                            </InputGroup>  
                            <div className="mx-2 text-end border-top pt-2">
                                <Button size="sm" variant="secondary" className="rounded-pill">
                                    Search
                                </Button>                                
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={8} lg={9}>
                    <Card className="mb-3 shadow bg-white">
                        <Row className="m-0">
                            <Col lg={4} className="d-none d-lg-block px-0 bg-secondary">
                                <Image className="h-100 w-100" src="" alt=""/>
                            </Col>
                            <Col xs={12} lg={8} className="px-0">
                                <Table borderless className="mb-0">
                                    <thead>
                                        <tr className="border-bottom text-secondary text-center">
                                            <th>Tour</th>
                                            <th>Description</th>
                                            <th>Details</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-center text-secondary small">
                                            <td>XXX</td>
                                            <td>DDDDDDDDDD</td>
                                            <td>EEEE</td>
                                            <td>$ 0.00</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>     
    );
}

export default ServicesS2;