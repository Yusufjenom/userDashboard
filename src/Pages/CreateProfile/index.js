import { AppContext } from "../../App";
import { useContext, useState } from "react";


const CreateProfile = () => {
    const { globalUserName, setGlobalUserName } = useContext(AppContext)
    const [newUserName, setNewUserName ] = useState("")
    return ( 
        <div>
            <input placeholder="enter a User name" onChange={(e) => setNewUserName(e.target.value)}/>
            <button onClick={()=> setGlobalUserName(newUserName)}>submit</button>
        </div>

     );
}
 
export default CreateProfile;