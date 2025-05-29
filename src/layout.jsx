import { NavLink, Outlet, useLocation, useParams } from "react-router";
import "./App.css";
function Layout() {
  const location = useLocation();
  const{id}=useParams()
  const isEditing = location.pathname.includes("/edit"+"/"+id);
  return (
    <>
      <div>
        {!isEditing && (
            <ul className="nav">
              <li>
                <NavLink to="/" className="nav-li">
                  UserList
                </NavLink>
              </li>
              <li>
                <NavLink to="/add" className="nav-li">
                  Add New User
                </NavLink>
              </li>
            </ul>
        )}
        <Outlet />
      </div>
    </>
  );
}
export default Layout;
