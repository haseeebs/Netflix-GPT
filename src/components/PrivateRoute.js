import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {

    const userDetails = useSelector(store => store.user);

    return (userDetails ? <Navigate to={'/browse'} replace/> : <Outlet />)

}

export default PrivateRoute