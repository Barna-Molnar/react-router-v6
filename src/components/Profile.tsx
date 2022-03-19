import { useContext } from "react"
import AppContext from "./AppContext"


const Profile = () => {

    const context = useContext(AppContext)

    return (
        <div>
            Welcome on {context.user?.userName}'s Profile Page
        </div>
    )
}

export default Profile