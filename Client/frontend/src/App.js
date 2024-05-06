import {Route, Routes} from 'react-router-dom'
import { Provider } from "react-redux";
import store from './Store';

// customer
import Login from './Pages/Customer/Login/Login';
import Register from './Pages/Customer/Register/Register';

// famrmer
import FarmerRegister from './Pages/Farmer/Register/Register';
import RegTransaction from './Pages/Farmer/RegTransaction/RegTransaction';

// admin
import Adminlogin from './Pages/Admin/Login/Login'
import AdminDashboard from './Pages/Admin/Dashboard/Dashboard'
import Home from './Pages/Customer/Home/Home';

function App() {
  return (
    <Provider store={store}>
    <Routes>
      {/* customer */}


      <Route path="/login" element={<Login/>}/>
      <Route path="" element={<Home/>}/>
      <Route path='/register' element={<Register/>}></Route>
      
      
      {/* farmer */}
      <Route path="/farmer">
        <Route path="register" element={<FarmerRegister />} />
        <Route path="register/transaction" element={<RegTransaction />} />
      </Route>

         {/* admin */}
      <Route path='/admin' element={<AdminDashboard/>}> </Route>
         <Route path='/admin/login' element={<Adminlogin/>}/>

     



    </Routes></Provider>
  );
}

export default App;
