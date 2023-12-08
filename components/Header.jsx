import { Container, Navbar, Nav } from "react-bootstrap";
import Image from 'next/image';


export default function Header(){

    return(
        <>
            <Navbar expand="lg" className="bgNav ">
                <Container>
                    <Navbar.Brand> <a href="/"> <Image src="/image-removebg-preview.png" width={100} height={80} alt='logo'></Image> </a> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="centroHead">
                            <Nav.Link href="/historia"><h6 className="corLetra">História</h6></Nav.Link>
                            <Nav.Link href="/escola"><h6 className="corLetra">Escola</h6></Nav.Link>
                            <Nav.Link href="/galeria"><h6 className="corLetra">Galeria</h6></Nav.Link>
                            <Nav.Link href="/matriculas"><h6 className="corLetra">Matrículas</h6></Nav.Link>
                            <Nav.Link href="/parcerias"><h6 className="corLetra">Parceiras</h6></Nav.Link>
                            <Nav.Link href="http://escolaosemeador.com.br/lp/"><h6 className="corLetra">Doação</h6></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                   
           
                </Container>
            </Navbar>
        </>
    );
}