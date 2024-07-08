import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import AdminHeader from '../../../Components/AdminHeader/AdminHeader'
import axios from '../../../Config/Axios'
import {useNavigate} from 'react-router-dom'
const Dashboard = () => {

  const [side,settoggleside] = useState(true)

   const navigate = useNavigate()
  useEffect(()=>{
         
    const fetchUser = async()=>{
      
      try{ 
         

        const accessToken = localStorage.getItem('access_token')
      const user = await axios('admin/get-admin/',{
        headers: {
          'Authorization': `Bearer ${accessToken}`
      }
         
       
      })

    console.log(user)
  
   }
      catch(e){
        console.log(e);
        if (e.response.status==401 || e.response.status==403){
               navigate('/admin/login')
        }

      }
    }
    fetchUser()



  },[])

  
  return (
    <React.Fragment>
         
      <AdminHeader side={side} toggleSidebar={()=>settoggleside((p)=>!p)} />
          
      <AdminSidebar side={side}>
div
            <div>
            shlwlelrn
          </div>
          
      </AdminSidebar>
    
          


      </React.Fragment>
  )
}

export default Dashboard