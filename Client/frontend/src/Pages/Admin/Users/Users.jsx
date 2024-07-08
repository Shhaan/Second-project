import React, { useState } from 'react'
import AdminHeader from '../../../Components/AdminHeader/AdminHeader'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'

const Users = () => {
  const [side,settoggleside] = useState(true)
  return (
    <React.Fragment>
         
      <AdminHeader side={side} toggleSidebar={()=>settoggleside((p)=>!p)} />
          
      <AdminSidebar side={side}>

            <div>
            shlwlelrn
          </div>
          
      </AdminSidebar>
    
          


      </React.Fragment>
  )
}

export default Users
