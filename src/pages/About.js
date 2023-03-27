import React from 'react'
import Layout from '../layout/Layout'
import homepage1 from '../images/homepage1.jpg'
import homepage2 from '../images/homepage2.jpg'
import Customers from '../components/Customers'
import { useContext } from 'react'
import ThemeContext from '../components/ThemeContext'

const About = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Layout>
      <div className={theme}>
      <div className='container-fluid about-body'>
      <h1>Why You Choose Us</h1>
      </div>
    <div className='container about-body2'>
       <div className='row'>
         <div className='col about-body2'>
           <div className="container about-image"> 
             <img src={homepage1} />
           </div>
         </div>
         <div className='col'>
          <div className='container about-body-para'>
            <h1><b>History of our Company</b></h1>
            <p>Amazon was founded in the garage of Bezos' rented home in Bellevue, Washington. Bezos' parents invested almost $250,000
               in the start-up. On July 16, 1995, Amazon opened as an online bookseller, selling the world's largest collection of books
               to anyone with World Wide Web access.</p>
            </div>
         </div>
        </div> 
    </div>
    <Customers/>
    <div className='container about-body3'>
      <div className='row'>
        <div className='col'>
          <div className='container'>
          <h1><b>Requirment For Shopping</b></h1>
          <p>A Mobile Phone or a Laptop</p>
          <p>internet Connection</p>
          <p>Data Analyist</p>
          <p>Team Management</p>
          <p>Human Resource</p>
          <p>Free Time</p>
          </div>
        </div>
        <div className='col'>
          <div className='container about-image2'>
          <img src={homepage2} />
          </div>
        </div>
      </div>
    </div>
    </div>
    </Layout>
  )
}

export default About
