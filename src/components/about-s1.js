import {Col,Container,Row} from "react-bootstrap";

function AboutS1(){
    return(                   
        <Container fluid className="about-s1 minh-50vh d-flex align-items-center pt-5">
            <Row className="w-100 mx-0 mt-5 pt-5">
                <Col xs={12} md={6} lg={7} className="minh-25vh"></Col>
                <Col xs={12} md={6} lg={5} className="d-flex align-items-center">
                    <div className="text-center text-md-start">
                        <h2 className="display-6">
                            Phasellus a lacus
                        </h2>
                        <p className="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit, 
                            neque vel tincidunt sollicitudin, libero magna laoreet massa, eu pretium 
                            leo eros at mauris. Phasellus a lacus ipsum. Maecenas dapibus nisi ac 
                            fringilla pretium. Nulla ullamcorper arcu at ipsum tempor, a mattis felis 
                            consequat. Nam mattis dignissim tincidunt. Etiam malesuada a ante ac molestie. 
                            Curabitur nisl justo, vehicula sit amet felis quis, imperdiet scelerisque 
                            neque. Pellentesque a ante ac dui fringilla consectetur. Phasellus luctus 
                            nibh id congue finibus.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutS1;