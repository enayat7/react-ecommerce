import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import Home from '../Home/Home';
import Cart from '../Cart/Cart';
import Layout from '../Layout/Layout';

const PrivateRoute = () => {
  const { token } = useAuth();
  return token ? <Outlet/>  : <Navigate to="/login" />;
};
export default PrivateRoute;

// export default function Privateroute() {
//   return {
//     element: <Layout />,
//     children: [
//       { path: "/", element: <Home /> },
//       {path: "cart",element:<Cart/> },
//       { path: "*", element: <Navigate to="/" replace /> },
//     ],
//   };
// }

