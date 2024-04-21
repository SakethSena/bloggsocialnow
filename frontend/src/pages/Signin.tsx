import {Heading} from "../components/Heading"
import {Authentication} from "../components/Authentication"

export const Signin = () => {
    return (
    <div>
        <div>
            <Authentication type={"signin"}/>
        </div>
        <div>
            <Heading/>
        </div>
    </div>
    )
}