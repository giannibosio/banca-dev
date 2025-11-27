import { Navbar as RBNavbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

interface Props {
  isLoggedIn: boolean;
}

export function Navbar({ isLoggedIn }: Props) {
  if (!isLoggedIn) return null; //Nascondi navbar se non loggato

  return (
    <RBNavbar
      bg="transparent"
      data-bs-theme="transparent"
      expand="lg"
      className="navbar navbar-expand-lg navbar-dark bg-transparent mb-1"
    >
      <Container>
        <RBNavbar.Brand as={NavLink} to="/home"></RBNavbar.Brand>

        <RBNavbar.Toggle aria-controls="main-navbar" />
        <RBNavbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/home" end>
              Menu
            </Nav.Link>

            <Nav.Link as={NavLink} to="/prelievo">
              Prelievo
            </Nav.Link>

            <Nav.Link as={NavLink} to="/movimenti">
              Movimenti
            </Nav.Link>

            <Nav.Link as={NavLink} to="/estratto-conto">
              Estratto Conto
            </Nav.Link>

            <Nav.Link as={NavLink} to="/esci">
              Esci
            </Nav.Link>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
}
