import {Form,InputGroup} from "react-bootstrap";

function PayWith(props){
    return(
        <div className="w-100">
            <h6 className="mb-2 text-secondary border-bottom pb-2">
                Pay with:
            </h6> 
            <InputGroup size="sm" className="mb-2 ps-3 small">    
                <Form.Check className="text-secondary"
                    type={"radio"}               
                    label={"Credit card"}/>
            </InputGroup>   
            <InputGroup size="sm" className="mb-2 ps-3 small">          
                <Form.Check className="text-secondary"
                    type={"radio"}
                    label={"Cash"}/>    
            </InputGroup>        
            <InputGroup size="sm" className="mb-2 ps-3 small">       
                <Form.Check className="text-secondary"
                    type={"radio"}
                    label={"Blik"}/>
            </InputGroup> 
        </div>            
    );
}

export default PayWith;