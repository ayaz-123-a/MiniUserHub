import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, NavLink } from "react-router";
import UserList from "./userList";
import "./App.css";
// import UserEdit from "./userEdit"
import ErrorPage from "./pageNotFound";
import Layout from "./layout";
import React, { Suspense } from "react";
import { MoonLoader } from "react-spinners";

const UserEdit = React.lazy(() => import("./userEdit"));
const UserAdd = React.lazy(() => import("./userAdd"));

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<UserList />} />
          <Route
            path="/add"
            element={
              <Suspense
                fallback={<div style={{ display: "flex" ,justifyContent: "center", marginTop: "80px" }}>
                  <MoonLoader color="#19d12b" size={100}/>
                </div>}
              >
                <UserAdd />
              </Suspense>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <Suspense fallback={<div style={{ display: "flex" ,justifyContent: "center", marginTop: "80px" }}>
                  <MoonLoader color="#19d12b" size={100}/>
                </div>}>
                <UserEdit />
              </Suspense>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
