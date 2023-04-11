import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
const Layout1 = (props) => {
  return (
   <>
   
   <Sidebar />
   <Header/>
   {props.children}
   <Footer />
   </>
  )
}

export default Layout1
