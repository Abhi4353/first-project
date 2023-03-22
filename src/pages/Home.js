import React from 'react'
import Layout from '../layout/Layout'
import Banner from '../components/Banner'
import Benefits from '../components/Benefits'
import Customers from '../components/Customers'
const Home = () => {
   
  return (
    <Layout>
<Banner/>
<Customers/>
<Benefits/>
 
   </Layout>
  )
}

export default Home
