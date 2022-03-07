import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.nav`
    
    margin-left: 20px;
    a {
        margin-right: 16px;
    }
   
`;

const Products = () => {
    return (
        <Div>
            <div>
                <input type="seacrch" placeholder='search products' />
            </div>
            <nav>
                <Link to='featured'>Featured</Link>
                <Link to='new'>New</Link>
            </nav>
            <Outlet />
        </Div>
    )
}

export default Products