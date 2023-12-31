import React from 'react'
import Login from '../Login/Login';
import { Navigate } from 'react-router-dom';
export default function PublicRoute() {
   return [
    { path: "/login", element: <Login /> },
    { path: "*", element: <Navigate to="/login" replace /> },
  ];
}

