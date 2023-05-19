import React from 'react'
import Layout from '../layout/Layout'
import Banner from '../components/Banner'
import Benefits from '../components/Benefits'
import Customers from '../components/Customers'
import ThemeContext from '../components/ThemeContext'
import Subscribe from '../components/Subscribe'
import { useContext } from 'react'
const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
    <Layout>
<Banner/>
<Customers/>
<Benefits/>
 <Subscribe/>
<Customers/>
   </Layout>
   </div>
  )
}

export default Home
