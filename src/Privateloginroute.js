import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
function Privateloginroute() {
    const token2 = localStorage.getItem("tokenforlogin")
    return token2 ? <Outlet/> : <Navigate to = "/"/>
}
export default Privateloginroute;
