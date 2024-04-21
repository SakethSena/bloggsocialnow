import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
import {Logout} from "../components/Logout"

export const AppBar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <h1 className="bg-black text-white pt-3">BLOGG NOWW</h1>
        <div className="bg-black text-white">
        <Link to={'/blogs'} className="flex flex-col justify-center pt-3 cursor-pointer">
                Blogs
        </Link>
        </div>
        <Avatar size={"big"} name="AB" />
        <div>
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Add New blog Here</button>
            </Link>
        </div>
        <div>
            <Logout/>
        </div>
    </div>
}