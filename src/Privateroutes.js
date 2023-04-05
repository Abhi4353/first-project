import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const Privateroutes = () => {
   const token = localStorage.getItem("token")
  return token ? <Outlet/>: <Navigate to="/admin" />
}

export default Privateroutes
