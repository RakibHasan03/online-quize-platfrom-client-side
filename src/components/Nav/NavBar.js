import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink ,Link } from 'react-router-dom';
import './NavBar.css'


function YourNav() {
    return (
        <Navbar bg="light" expand="lg" className='shadow sticky-top py-2'>
            <Container>
                <Link to='/' className='route-name fw-semibold'><h5>Learn With Quiz</h5></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto route-nav">
                        <NavLink to='home' className={({isActive})=> isActive ? 'active' : undefined}>Home</NavLink>                    
                        <NavLink to='topics' className={({isActive})=> isActive ? 'active' : undefined}>Topics</NavLink>                    
                        <NavLink to='statistics' className={({isActive})=> isActive ? 'active' : undefined}>Statistics</NavLink>                    
                        <NavLink to='blog' className={({isActive})=> isActive ? 'active' : undefined}>Blog</NavLink>                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default YourNav;