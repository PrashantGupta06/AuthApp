import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const clickHandler = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Loggedout");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const fetchProducts = async () => {
    try {
      const url = "http://localhost:8080/products";
      const headers = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      setProducts(result);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Hello {loggedInUser}</h1>
      <button onClick={clickHandler}>Logout</button>
      <div>
        {products.map((item) => (
          <ul key={item.id}>
            <li>
              <span>
                {item.name} : {item.price}
              </span>
            </li>
          </ul>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
