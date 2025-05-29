//studying loader

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import { MoonLoader } from "react-spinners";

const url = "http://localhost:3000/users";
function UserList() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
    setLoading(true);
  }, []);

  const getData = async () => {
    try {
      let response = await fetch(url);
      response = await response.json();
      setUserData(response);
      setLoading(false);
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  const deleteData = async (id, name) => {
    let response = await fetch(url + "/" + id, {
      method: "DELETE",
    });
    response = await response.json();
    if (response) {
      alert(`${name} is Deleted Successfully`);
      getData();
    }
  };

  const navigate = useNavigate();
  const editPage = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <h1>
        <b>User List</b>
      </h1>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "80px",
          }}
        >
          <MoonLoader color="#19d12b" size={100} />
        </div>
      ) : error ? (
        <h1 style={{ color: "red", textAlign: "center" }}>
          Something went wrong
        </h1>
      ) : (
        userData.map((user) => (
          <div
            key={user.id}
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <div
              style={{
                marginTop: "20px",
                padding: "25px",
                width: "650px",
                border: "1px solid black",
                alignItems: "flex-start",
                justifyContent: "space-around",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3>
                {" "}
                <b>Name:</b> {user.name}
              </h3>
              <h3>
                <b>Email:</b> {user.email}
              </h3>
              <h3>
                Action:
                <Button
                  variant="danger"
                  onClick={() => {
                    alert(`Are you sure you want to delete ${user.name}`);
                    deleteData(user.id, user.name);
                  }}
                >
                  {" "}
                  Delete{" "}
                </Button>{" "}
                <Button onClick={() => editPage(user.id)}> Edit </Button>
              </h3>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default UserList;
