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


    const navLinkStyles = (props: navLinkStyles) => {
        return {
            textDecoration: props.isActive ? 'none' : 'underlined',
            fontWeight: props.isActive ? 'bold' : 'normal',
            color: props.isActive ? 'red' : 'green'
        }
    }
    return (
        <NAV>
            <NavLink to='/' style={navLinkStyles}>Home</NavLink>
            <NavLink to='/about' style={navLinkStyles}>About</NavLink>
        </NAV>
    )
}

export default NavBar