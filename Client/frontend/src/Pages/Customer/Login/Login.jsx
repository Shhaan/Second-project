import React,{useEffect, useState} from 'react'
import Header from '../../../Components/athenticationHeader/Header'
import Bg from '../../../Asset/Image/bg.jpg'
import google from  '../../../Asset/Image/google.png'
import logincss from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../../Config/Axios'
import { useDispatch, useSelector } from 'react-redux';
import {UserLogLoading,UserRegistered,UserRegistrationerr,UserisFarmer} from '../../../Slices/UserSlice'
const Login = () => {

  const {user,isFarmer, loading, isAuthenticated,error}= useSelector(state=>state.UserSlice)


  const [data,setData] = useState({Email:'',password:''})
  const [errordata,seterrorData] = useState('')
  const navigate = useNavigate()
  
  const dispatch = useDispatch()
  
  const handlechange=(e)=>{
      const {name,value} = e.target

      setData(prevData => ({
          ...prevData,
          [name]: value
      }));


  }

  const handlesubmit=async(e) =>  {
    e.preventDefault()
    if (!data.Email || !data.password){
      seterrorData('Invalid user credentials')
      return 
    }
    try{ 
      dispatch(UserLogLoading())
       const response = await axios.post('api/token/',data)

          
    if (response.status ==200){
     
      localStorage.setItem('access_token',response.data.access)
        localStorage.setItem('refresh_token',response.data.refresh)
 
        const accessToken = localStorage.getItem('access_token');
            
        const getuser = await axios.get('currentuser/', {
          headers: {
              'Authorization': `Bearer ${accessToken}`
          }
        })

        
      dispatch(UserRegistered(getuser.data))
       
      
      if (user[0].is_staff){
        dispatch(UserisFarmer())
      }


      }

      navigate('/')

    }
    catch(e){

      dispatch(UserRegistrationerr(e.response.data))
        

    }
    

    


  }

  return ( 
    <React.Fragment>
    <Header admin={false}/>
    <div className={logincss.maindiv} style={{backgroundImage:`url(${Bg})`}}>
    
    
    <div className={logincss.innnerdiv}>

         <h1 className={logincss.mainhead}>Sign In</h1>
         <form onSubmit={(e)=>handlesubmit(e)}>
         <div className={logincss.inpdiv}>
         <input type="email" name="Email" value={data.Email} onChange={(e)=>handlechange(e)} placeholder="Email" className={logincss.inp} />
         
         <input type="password" name="password" value={data.password} onChange={(e)=>handlechange(e)} placeholder="Password"  className={logincss.inp} />
         {errordata && <h6 className={logincss.errordiv}>{errordata}</h6>}

         {error&& <h6 className={logincss.errordiv}>{error}</h6>}
         
         
         <button type='submit'  className={logincss.button}>Login</button>
         
         <div className={logincss.sepraterdiv}>

         <hr className={logincss.sepraterhr}/>
         <h1 className={logincss.seprateh1}>or</h1>
         <hr className={logincss.sepraterhr}/>

         </div>
         <div >
          <img src={google} alt="google" className={logincss.googleimg} />
         <button id={logincss.google} className={logincss.button}>Authenticate with google</button></div>
         </div></form>
        
         <h2 className={logincss.navs}>New to FarmAid and a customer ?  <Link style={{textDecoration: 'none'}} to={'/register'}> <span style={{color:'black',textDecoration: 'none'}}>  Register</span></Link></h2>
         <h2 className={logincss.navs}>New to FarmAid and Farmer ?  <Link style={{textDecoration: 'none'}} to={'/farmer/register'}>  <span style={{color:'black',textDecoration: 'none'}}>Join as farmer </span></Link></h2>


    </div>
    
    </div>

     <div className={logincss.footer}></div>
    </React.Fragment>
     
  )
}

export default Login