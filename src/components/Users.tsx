import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components';

const DIV = styled.div`
    a {
        margin: 10px ;
    }
`;
const users = [
    {
        name: "User 1",
        id: '1'
    },
    {
        name: "User 2",
        id: '2'
    },
    {
        name: "User 3",
        id: '3'
    }
]


const Users = () => {
    return (
        <DIV>
            {users.map((user) => (
                <Link to={user.id}>{user.name}</Link>
            ))}
            <Outlet />
        </DIV>
    )
}

export default Users