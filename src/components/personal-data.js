import {Card,Form,InputGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

function PersonalData(){
    return(
        <Card className="shadow mb-3 bg-white" id="personal-data">
            <Card.Header>
                <h6 className="text-secondary mb-0 d-inline-block">
                    Personal data
                </h6>
            </Card.Header>
            <Card.Body className="collapse show">
                <InputGroup size="sm" className="mb-2">
                    <InputGroup.Text className="bg-white">First name:</InputGroup.Text>
                    <Form.Control type="text" className="border-start-0 text-end bg-white"/>
                </InputGroup>
                <InputGroup size="sm" className="mb-2">
                    <InputGroup.Text className="bg-white">Last name:</InputGroup.Text>
                    <Form.Control type="text" className="border-start-0 text-end bg-white"/>
                </InputGroup>
                <InputGroup size="sm" className="mb-2">
                    <InputGroup.Text className="bg-white">Phone:</InputGroup.Text>
                    <Form.Control type="tel" className="border-start-0 text-end bg-white"/>
                </InputGroup>
                <InputGroup size="sm" className="mb-2">
                    <InputGroup.Text className="bg-white">City:</InputGroup.Text>
                    <Form.Control type="text" className="border-start-0 text-end bg-white"/>
                </InputGroup>                
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text className="bg-white">Address:</InputGroup.Text>
                    <Form.Control type="text" className="border-start-0 text-end bg-white"/>
                </InputGroup> 
                <h6 className="mt-3 mb-2 text-secondary border-top pt-2">
                    Account data:
                </h6> 
                <InputGroup size="sm" className="mb-2">
                    <InputGroup.Text className="bg-white">Email:</InputGroup.Text>
                    <Form.Control type="email" className="border-start-0 text-end bg-white"/>
                </InputGroup>
                <InputGroup size="sm" className="mb-2">
                    <InputGroup.Text className="bg-white">Password:</InputGroup.Text>
                    <Form.Control type="email" className="border-start-0 text-end bg-white"/>
                </InputGroup>   
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text className="input-group-text bg-white">Password repeat:</InputGroup.Text>
                    <Form.Control type="email" className="border-start-0 text-end bg-white"/>
                </InputGroup>   
                <div className="mx-2 text-end border-top pt-3 d-block d-md-none">
                    <Link to="/basket#order-details" 
                        className="btn btn-sm btn-outline-secondary rounded-pill">
                        Previous
                    </Link>
                    <Link to="/basket#payment-data" 
                        className="btn btn-sm btn-secondary rounded-pill">
                        Next
                    </Link>
                </div>   
            </Card.Body>
        </Card>
    );
}
export default PersonalData;