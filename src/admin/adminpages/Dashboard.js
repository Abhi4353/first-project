import React from 'react'
import Layout1 from './layout/Layout1'

const Dashboard = (props) => {

  return (
    <>
 <Layout1>
{props.children}
 </Layout1>
  </>
  )
}

export default Dashboard
