/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom'
import Dashboard from '../Component/Dashboard'
import Footer from '../Component/Footer'

function Mainlayout() {
  return (
    <>
        <Dashboard/>
        <Outlet/>
        <Footer/>
    </>
      
  )
}

export default Mainlayout