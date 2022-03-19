import { useContext } from "react";
import { NavLink } from "react-router-dom"
import styled from 'styled-components'
import AppContext from "./AppContext";

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
    const context = useContext(AppContext);

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
            <NavLink to='/profile' style={navLinkStyles}>Profile</NavLink>
            {
                context.user ? (

                    <div>Welcome back: {context.user?.userName}!</div>
                ) : <div>You are not logged in!</div>
            }
        </NAV>
    )
}

export default NavBar