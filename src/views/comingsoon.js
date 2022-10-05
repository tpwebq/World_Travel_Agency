import {Col,Container,Row} from "react-bootstrap";
import Footer from "../components/footer"; 

function Comingsoon(){
    return(
        <main>
            <Container fluid className="comingsoon-s1 min-vh-100 d-flex align-items-center py-5">
                <Row className="row w-100 mx-0">
                    <Col xs={8} md={6} className="text-end ms-auto">
                        <h1 className="display-1 text-white text-shadow">
                            Coming soon
                        </h1>
                    </Col>
                </Row>
            </Container>
            <Footer classExt={"fixed-bottom"}/>
        </main>
    );
}

export default Comingsoon;