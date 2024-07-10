/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Component/Login'
import About from './Pages/About'
import Home from './Pages/Home'
import Mainlayout from './Layout/Mainlayout'
import Booking from './Pages/Booking'
import Register from './Component/Register'
import { ToastContainer } from 'react-toastify'
import ResetPassword from './Component/ResetPassword'
import BookingList from './Pages/Admin/BookingList'

const App = () => {
  return (
  <>

  <ToastContainer/>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/resetPassword' element={<ResetPassword/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='Dashboard' element={<Mainlayout/>}>
      <Route path='Home' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Booking' element={<Booking/>}/>
      <Route path='Admin' element={<BookingList/>}/>
      

      </Route>

    </Routes>
  </BrowserRouter>
  </>
  )
}
export default App