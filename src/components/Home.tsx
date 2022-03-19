import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from './AppContext'

interface HomeProps {
    setUser: (user: User) => void
}

const Home: FC<HomeProps> = (props) => {
    const navigate = useNavigate()

    const [userName, setUserName] = useState('')

    return (
        <>
            <div>Home Page</div>
            <button onClick={() => navigate('order-summary', { replace: true })}>
                Place Order
            </button>
            <div>
                <input type="text" placeholder='Type your userName' onChange={(e) => setUserName(e.target.value)} value={userName} />
                <button
                    onClick={() => {
                        props.setUser({ userName: userName, isLoggedIn: true })
                        setUserName('')
                    }}
                >
                    Login
                </button>
                <button
                    onClick={() => props.setUser(undefined)}
                >
                    LogOut
                </button>
            </div>
        </>
    )
}

export default Home