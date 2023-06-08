import { useContext } from "react"
import { UserAuthContext } from "../AuthProvider/AuthProvider"

const useAuth = () =>{
    const auth = useContext(UserAuthContext);
    return auth;
}

export default useAuth;