import {Card,Col,Container,Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Footer from "../components/footer";

function Privacy(){
    return(
        <main>
            <Container fluid className="privacy-s1 min-vh-100 d-flex align-items-center">
                <Row className="mx-0 w-100 py-5 my-5">
                    <Col xs={12} sm={10} md={8} lg={7} xl={6} className="mx-auto">
                        <Card className="text-center text-dark bg-info border-dark shadow">
                            <Card.Header className="bg-transparent border-bottom-0">
                                <h1 class="h4 text-dark mt-3">
                                    Privacy Policy
                                </h1>
                            </Card.Header>
                            <Card.Body class="card-body px-4 text-start">
                                <p class="mt-3">
                                    This website is a demo version of real website, It doesn't collect and process, 
                                    in long term meaning (longer than needed for website operation during visitor's 
                                    presence), any user (visitor) data. All information collected during visitor's 
                                    presence on this website is used only for technical purposes, required for correct 
                                    operation of website or demonstration purposes related to technical mechanisms 
                                    and presentation of its operation.
                                </p>
                                <p class="mt-3">
                                    All data stored in cookies is directly related to saved visitor's settings 
                                    for website's mechanisms, and can be managed by visitor with functionality 
                                    provided by visitor's web browser - in order to get more information visitor 
                                    should check web browser's manual.
                                </p>
                                <p class="mt-3">
                                    However this website may contain attached third-party addons (like for 
                                    example: scripts added by hosting services provider) which may collect 
                                    visitors data for security and technical purposes. In order to know more 
                                    about them, visitor should visit hosting provider's website and check 
                                    privacy policy related to collected data.
                                </p>
                                <p class="mt-3">
                                    All materials used for creation of this website were acquired from legal 
                                    resources (freepik.com, pixabay.com). Any convergences and similarities with any materials presented 
                                    on other websites or resources are accidental.
                                </p>
                            </Card.Body>
                            <Card.Footer className="border-top text-center pb-3 bg-info border-top-0">
                                <Link to="/" className="btn btn-outline-dark rounded-pill">
                                    back to <span className="fw-bold">Home</span>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>            
            <Footer classExt={"py-1 border-top border-dark bg-info"}/>
        </main>
    );
}

export default Privacy;