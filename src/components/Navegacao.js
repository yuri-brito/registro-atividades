import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import {Toaster,toast} from 'react-hot-toast';

function Navegacao(props) {
    function testLogged(){
        !props.isLogged&&toast.error('Usuário não logado!')
    }

  return (
      <Navbar key={false} bg="light" expand={false} className="mb-3" style={{boxShadow:'0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',borderRadius:'12px'}}>
        <Container fluid>
          <Link to={'/home'} style={{textDecoration:'none',color:'rgba(0,0,0,0.6)'}}>
            <img src={logo} alt='logo' width={65}/>
            <h4 style={{display:'inline',marginLeft:10}}><b>Controle de Atividades</b></h4>
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}` }onClick={testLogged} />
          <Toaster position="top-center"  reverseOrder={false}/>
          {props.isLogged&& 
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${false}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                placement="end" >
                <Offcanvas.Header closeButton style={{backgroundColor:'rgba(0,0,0,0.15)',boxShadow:'0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)'}}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`} >
                    Menu
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link to={'/home'} style={{textDecoration:'none',color:'grey',marginTop:10}}>
                    <i className="bi bi-house-door-fill"></i>  Home
                    </Link>
                    <Link to={'/atividades'} style={{textDecoration:'none',color:'grey',marginTop:10}}>
                    <i className="bi bi-pencil-square"></i>  Atividades
                    </Link>
                    <Link to={'/logout'} style={{textDecoration:'none',color:'grey',marginTop:10}}>
                        Logout  <i className="bi bi-box-arrow-right"></i>
                        
                    </Link>
                    {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${false}`}
                    >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                {/* <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                </Offcanvas.Body>
            </Navbar.Offcanvas>
            }
        </Container>
      </Navbar>
   
  );
}

export default Navegacao;