import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3002/api/auth/check", { withCredentials: true })
      .then((res) => {
        setIsValid(res.data.valid);
      })
      .catch(() => {
        setIsValid(false);
      });
  }, []);

  if (isValid === null) {
    return <p>Checking authentication...</p>;
  }

  if (!isValid) {
    return <Navigate to="http://localhost:3000/login" replace />;
  }

  return children;
};

export default ProtectedRoute;