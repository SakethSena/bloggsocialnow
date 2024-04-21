import {SignupInput} from "@sakethsenapathi/medium-common"
import {Link, useNavigate } from "react-router-dom"
import {ChangeEvent, useState} from "react"
import { BACKEND_URL } from "../config";
import axios from "axios"


export const Authentication = ({type} : {type : "signup" | "signin"}) => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [content, setContent] = useState<SignupInput>({
        name : "",
        username : "",
        password: ""
    });

    async function sendRequest(){
        setLoading(true);
        try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, content)
        const jwt_token = response.data 
        localStorage.setItem("token", jwt_token);
        navigate("/blogs")
        }
        catch(e) {
            alert("Error while signing up!")
        }
        finally{
            setLoading(false);
        }
    }

    return (
        <div  className="bg-slate-400 h-screen pt-40 md:container md:mx-auto flex  flex-col">
            <div className="text-center text-3xl font-extra-bold pt-4">
            <div>
             <div>
                 <div className="font-bold">
                    {type === "signup" ? "Create an account" : "Login Now"}
                 </div>
              <div className="text-center text-xl font-bold pt-4">
                    {type === "signup" ? "Already Have an Account" : "Dont Have an account" }
    
                    <span><Link className="pl-2 underline" to={type === "signup" ? "/signin" : "/signup"}>{type === "signup" ? "/signin" : "/signup"}</Link></span>
               </div>
            </div>
            <div className="flex justify-center flex-col">
                <div className="text-center  flex justify-center pt-4">
                    {type === "signup" ?
                    <LabelledInput label="NAME"  placeholder="ex:sakethsenapathi" 
                    onChange= {(e) => {
                       setContent({
                        ...content,
                        name: e.target.value})
                       }}
                        />: null}
                </div>
                <div className="text-center pt-4 flex justify-center">
                    <LabelledInput label="USERNAME"  placeholder="ex:sakethsenapathi@gmail.com"  onChange={(e) =>
                    setContent({
                        ...content,
                        username : e.target.value})}/>
                </div>
                <div className="text-center pt-4 flex justify-center">
                    <LabelledInput  label="PASSWORD"  type={"password"} placeholder="ex:qwerty@123" onChange={(e) => 
                    setContent({
                        ...content,
                       password:  e.target.value})}/>
                </div>
                <div className="flex justify-center pt-5">
                <button type="button" className="text-center w-20 text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full" onClick={sendRequest} disabled={loading}>
                                {loading ? 'Loading...' : type === "signup" ? "Signup" : "Signin"}
                            </button>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

interface LabelledInputType {
    label : string;
    placeholder: string;
    onChange : (e: ChangeEvent<HTMLInputElement>) => void;
    type? : string;
}

function LabelledInput({label, placeholder, onChange, type} : LabelledInputType) {

      return (
        <div>
            <label className="mb-2 text-sm font-medium text-black">{label}</label>
            <input onChange={onChange} type={type || "text"} 
              className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
      )
}