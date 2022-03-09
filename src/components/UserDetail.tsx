import { useParams } from "react-router-dom"


const UserDetail = () => {
    const params = useParams()

    return (
        <div>UserDetail {params.userId}</div>
    )
}

export default UserDetail