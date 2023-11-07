import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/profile" /> : element;
};

export default PublicRoute;



