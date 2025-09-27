import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import ExternalRedirect from "./ExternalRedirect";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/auth/check`, { withCredentials: true })
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
    return <ExternalRedirect to={`${process.env.REACT_APP_FRONTEND_URL}/login`} />;
  }

  return children;
};

export default ProtectedRoute;