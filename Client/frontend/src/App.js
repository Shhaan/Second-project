import {Route, Routes} from 'react-router-dom'
import { Provider } from "react-redux";
import store from './Store';

// customer
import Login from './Pages/Customer/Login/Login';
import Register from './Pages/Customer/Register/Register';

import Otp from './Pages/Customer/Otp/Otp';
import Home from './Pages/Customer/Home/Home';

// famrmer
import FarmerRegister from './Pages/Farmer/Register/Register';
import FarmerHome from './Pages/Farmer/Home/Home';

import RegTransaction from './Pages/Farmer/RegTransaction/RegTransaction';

// admin
import Adminlogin from './Pages/Admin/Login/Login'
import AdminDashboard from './Pages/Admin/Dashboard/Dashboard'

import AdminCategory from './Pages/Admin/Category/Category'
import AdminAddCategory from './Pages/Admin/AddCategory/AddCategory'
import AdminEditCategory from './Pages/Admin/EditCategory/EditCategory'

import AdminUsers from './Pages/Admin/Users/Users'
import AdminFarmers from './Pages/Admin/Farmers/Farmers'
 
function App() {
  return (
    
    <Provider store={store}>
    <Routes>

          

      {/* customer */}


      <Route path="/login" element={<Login/>}/>
      <Route path="" element={<Home/>}/>
      <Route path='/register' element={<Register/>}></Route>

      <Route path='/register/otp-verification' element={<Otp/>}></Route>

      
      
      {/* farmer */}
      <Route path="/farmer">
        <Route path="register" element={<FarmerRegister />} />
        <Route path="register/transaction" element={
        <RegTransaction />} />

       
        <Route path="" element={<FarmerHome />} />

      </Route>

         {/* admin */}
      <Route path='/admin/dashboard' element={<AdminDashboard/>}> </Route>
         <Route path='/admin/login' element={<Adminlogin/>}/>
         <Route path='/admin/category' element={<AdminCategory/>}>
            
             <Route path='delete/:categoryId' element={<AdminCategory/>}/>
             
         </Route>
         <Route path='/admin/users' element={<AdminUsers/>}/>
         <Route path='/admin/farmers' element={<AdminFarmers/>}/>
         <Route path='/admin/category/add' element={<AdminAddCategory/>}/>
         <Route path='/admin/category/edit/:categoryId' element={<AdminEditCategory/>}/>







     



    </Routes></Provider>
  );
}

export default App;
