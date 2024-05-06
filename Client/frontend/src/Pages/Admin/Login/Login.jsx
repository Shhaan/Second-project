import React, { useEffect } from 'react'
import Header from '../../../Components/athenticationHeader/Header'
import adminLogin from './Login.module.css'
import logincss from '../../Customer/Login/Login.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const nav = useNavigate()

    const handlesubmit=(e)=>{

        e.preventDefault()

        

    }
    const [data,setData] = useState({Email:'',Password:''})

    const handlechange=(e)=>{
        const {name,value} = e.target

        setData(prevData => ({
            ...prevData,
            [name]: value
        }));


    }

    useEffect(()=>{
     console.log('render');
    },[])
  return (
    <>
    <Header admin={true}/>


    <div>
        <form onSubmit={(e)=>handlesubmit(e)} action="">
        <div className={`${adminLogin.innerdiv}  col-10 col-sm-8 col-md-6 col-lg-4 m-auto mt-5`}>
        <h1 className={`${logincss.mainhead}  py-5`} style={{fontFamily: 'Oswald'}}>Login</h1>
        

        <div className={logincss.inpdiv} style={{top:0}}>
         <input type="text" name="Email"  value={data.Email} onChange={(e)=>handlechange(e)}   placeholder="Email" className={`${logincss.inp} ${adminLogin.inp}`} /> 
         <input type="password" name="Password" value={data.Password} onChange={(e)=>handlechange(e)}    placeholder="Password" className={`${logincss.inp} ${adminLogin.inp}`} /></div>

<div className='text-center w-100'>
         <button type='submit' style={{backgroundColor:'#7CA0D7'}} className={`${logincss.button} my-5`}>Submit</button></div>
        </div>
        </form>
        </div>


    </>
  )
}  

export default Login