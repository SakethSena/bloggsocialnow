import {useNavigate} from "react-router-dom"






export const Logout = () => {

    const navigate = useNavigate()

    function Logout() {
         navigate("/Signup");
    }

    return (
        <div>
            <button onClick={Logout}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full" >Logout</button>
        </div>

    )
}