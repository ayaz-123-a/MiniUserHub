import { NavLink } from "react-router"

const ErrorPage=()=>{
    return(
        <div>
            <h1>Sorrry No Pages Found</h1>
            <NavLink to={"/"}> Go To Home</NavLink>
        </div>
    )
}
export default ErrorPage