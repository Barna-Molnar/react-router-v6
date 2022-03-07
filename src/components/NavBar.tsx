import { NavLink } from "react-router-dom"
import styled from 'styled-components'

const NAV = styled.nav`
    background-color: aliceblue;
    padding: 16px 32px;

    a {
        margin-right: 16px;
    }
    /* .active {
        text-decoration: none;
        font-weight: bold;
    } */
`;

interface navLinkStyles {
    isActive: boolean
}

const NavBar = () => {


    const navLinkStyles = ({ isActive }: navLinkStyles) => {
        return {
            textDecoration: isActive ? 'none' : 'underlined',
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'red' : 'green'
        }
    }
    return (
        <NAV>
            <NavLink to='/' style={navLinkStyles}>Home</NavLink>
            <NavLink to='/about' style={navLinkStyles}>About</NavLink>
            <NavLink to='/products' style={navLinkStyles}>Products</NavLink>
        </NAV>
    )
}

export default NavBar