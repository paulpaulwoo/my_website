import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navbarCss from './navbar.module.css'
const NavbarElement = () => {
    return (
        <ul className={navbarCss.navBarClass}>
        <div className={navbarCss.navbarLinkClass}>
            <li><a className={navbarCss.navbarIndividualLinkClass} href="./">Home</a></li> 
            <li><a className={navbarCss.navbarIndividualLinkClass} href="news.asp">About me</a></li>
            <li><a className={navbarCss.navbarIndividualLinkClass} href="contact.asp">Projects</a></li>
            <li><a className={navbarCss.navbarIndividualLinkClass} href="about.asp">Contacts</a></li>
        </div>
        </ul>
    );
};
export default NavbarElement;
