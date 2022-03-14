import { Link, Outlet, useSearchParams } from 'react-router-dom'
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
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUser = searchParams.get('filter') === 'active'
    return (
        <DIV>
            {users.map((user, i) => (
                <Link key={i} to={user.id}>{user.name}</Link>
            ))}

            <Outlet />
            <div>
                <button
                    onClick={() => setSearchParams({ filter: 'active' })}
                >
                    Active Users
                </button>
                <button
                    onClick={() => setSearchParams({})}
                >
                    Reset filter
                </button>
                {
                    showActiveUser
                        ? <h2>Showing active user</h2>
                        : <h2>Showing all user</h2>
                }
            </div>
        </DIV>
    )
}

export default Users