import {Link} from "react-router-dom";
import {Image,Nav,Navbar} from "react-bootstrap";

function Nabvar(props){
    let navContent;
    if(props.routes!==undefined 
    && Array.isArray(props.routes)){
        navContent = props.routes.filter((itm)=>itm.navbarItem).map((item,idx)=>{
            return <Nav.Item key={idx}>
                <Link to={item.path} className="nav-link">
                    {item.name}
                </Link>
            </Nav.Item>;
        });
    }
    return(        
        <Navbar expand="md">
            <Navbar.Brand href="/">
                <Image className="navbar-logo" src="img/navbar_logo.png" alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse id="main-nav">
                <Nav className="ms-auto text-end text-uppercase">
                    {navContent}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Nabvar;