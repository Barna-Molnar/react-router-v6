import { Link } from "react-router-dom"
import styled from 'styled-components'

const NAV = styled.nav`
    background-color: aliceblue;
    padding: 16px 32px;

    a {
        margin-right: 16px;
    }
`;

const NavBar = () => {
    return (
        <NAV>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </NAV>
    )
}

export default NavBar