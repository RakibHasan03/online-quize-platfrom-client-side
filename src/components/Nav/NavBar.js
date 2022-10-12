import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink ,Link } from 'react-router-dom';
import './NavBar.css'
import navIcon from '../../Images/favicon.png'


function YourNav() {
    return (
        <Navbar bg="light" expand="lg" className='shadow sticky-top'>
            <Container>
                <div className='d-flex align-items-center'>
                    <img src={navIcon} alt="" className='nav-icon' />
                    <Link to='/' className='route-name fw-semibold'><h5>Learn With Quiz</h5></Link>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto route-nav">                 
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