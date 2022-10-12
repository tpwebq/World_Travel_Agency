import {Form,InputGroup} from "react-bootstrap";


function PaymentDetails(){
    return(
        <div className="w-100">
            <h6 className="mb-2 text-secondary border-bottom pb-2">
                Payment details:
            </h6> 
            <InputGroup size="sm" className="mb-2">
                <InputGroup.Text className="bg-secondary">Credit card number:</InputGroup.Text>
                <Form.Control type="text" className="border-start-0 text-end bg-secondary" readOnly/>
            </InputGroup>
            <InputGroup size="sm" className="mb-2">
                <InputGroup.Text className="bg-secondary">Blik code:</InputGroup.Text>
                <Form.Control type="text" className="border-start-0 text-end bg-secondary" readOnly/>
            </InputGroup>   
        </div>
    );
}

export default PaymentDetails;