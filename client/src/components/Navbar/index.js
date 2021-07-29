import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavBtn, NavBtnLink } from './Elements.js'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo>
                        Varun
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to = "about"> About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = "history"> history</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = "school"> School</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = "projects"> Projects</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signIn">
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
