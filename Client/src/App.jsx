import Login from './Pages/login';
import Signup from './Pages/signup';
import Admindashboard from './Pages/admindash';
import Empdashboard from './Pages/empdash';
import {  Route, Routes } from 'react-router-dom';


function App() {


  return (
    <>
   
      <Routes>
        <Route path="/" element={<Login />}  />
         <Route path="/Admin-DashBoard" element={<Admindashboard/>}  />
          <Route path="/Employee-DashBoard" element={<Empdashboard/>}  />

        <Route path="/newuser" element={<Signup/>} />
      </Routes>
   

    </>
  )
}

export default App
