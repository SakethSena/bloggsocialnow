import {Heading} from "../components/Heading"
import {Authentication} from "../components/Authentication"


export const Signup = () => {
    return (
        <div className="bg-slate-300 grid grid-cols-1 lg:grid-cols-2"> 
           <div>
               <Authentication type={"signup"}/>
            </div>
            <div className="hidden lg:block">
                <Heading />
            </div>
        </div>
    )
}