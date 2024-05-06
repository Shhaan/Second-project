import React,{useReducer, useState} from 'react'
import Header from '../../../Components/athenticationHeader/Header'
import Bg from '../../../Asset/Image/bgreg.jpg'
import Bguser from '../../../Asset/Image/bgreguser.jpg'
import logincss from '../Login/Login.module.css'
import register from './Register.module.css'
import google from  '../../../Asset/Image/google.png'
import { reducerRegister } from '../../../Functions/Reducer'
import { Link } from 'react-router-dom'
import axios from '../../../Config/Axios'
const Register = () => {
    const initialState = {
        First_name: '',
        Last_name: '',
        Email: '',
        Phone: '',
        password1: '',
        password2: '',
        Address:'',
        Country:'',
        State:'',
        District:'',
        Postal_code:''
      }; 
   const [val,dispatchstate] = useReducer(reducerRegister,initialState)

   const [err,setErrors] = useState({})

   const handlechange=(e)=>{
    const {name,value} = e.target
 
    dispatchstate({type:'Change',field:name,value})

   }


   const handleSubmit=async(e)=>{
        e.preventDefault()

        let validationErrors={};  


        if (!val.First_name.trim()) {
          validationErrors.First_name = 'First name is required.';
        }
        if (!val.Last_name.trim()) {
          validationErrors.Last_name = 'Last name is required.';
        }
        if (!val.Email.trim()) {
          validationErrors.Email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(val.Email)) {
          validationErrors.Email = 'Invalid email address.';
        }
 
    
        if (!val.password1.trim()) {
          validationErrors.password1 = 'Password is required.';
        } else if (val.password1.trim().length < 6) {
          validationErrors.password1 = 'Password must be at least 6 characters long.';
        }
        else if (!/(?=.*[A-Za-z])(?=.*\d)/.test(val.password1)) {
          validationErrors.password1 = 'Password must contain at least one letter and one number.';
        }
        else if (val.password1 === val.Email) {
          validationErrors.password1 = "Password can't be email";
        }
    
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          
          return;
        } 
     try{
          const user =await    axios.post('',val)
     }
     catch(e){

     }

   }

  return (
    <React.Fragment>
    <Header admin={false}/> 

    <div   style={{backgroundImage:`url(${Bg})`, backgroundSize: 'cover' }} className='py-2'>
       
       

  <div className={register.innerdiv}>
  <h1 className={logincss.mainhead}>Register</h1>
  <div className={logincss.inpdiv} style={{top:0}}>
   
         <input type="text" name="First_name" value={val.First_name} onChange={(e)=>handlechange(e)} placeholder="First name" className={logincss.inp} />
          {err.First_name}
        
         <input type="text" name="Last_name" value={val.Last_name} onChange={(e)=>handlechange(e)} placeholder="Last name"  className={logincss.inp} />
         <input type="email" name="Email" value={val.Email} onChange={(e)=>handlechange(e)} placeholder="Email" className={logincss.inp} />
         <textarea name="Address" id="" onChange={(e)=>handlechange(e)} className={logincss.inp}  placeholder='Address'>{val.Address}</textarea>
        
         <div style={{display:'flex',flexDirection:'row',justifyContent: 'space-around'}}>
         <input type="text" name="Country" value={val.Country} onChange={(e)=>handlechange(e)}  placeholder="Country"  className={`${logincss.inp} ${register.width40}`} />
         <input type="text" name="State" value={val.State} onChange={(e)=>handlechange(e)}  placeholder="State"className={`${logincss.inp} ${register.width40}`}  />
         </div>
        
         <div style={{display:'flex',flexDirection:'row',justifyContent: 'space-around'}}>
         <input type="text" name="District" value={val.District} onChange={(e)=>handlechange(e)}  placeholder="District"  className={`${logincss.inp} ${register.width40}`}  />
         <input type="number" name="Postal_code" value={val.Postal_code} onChange={(e)=>handlechange(e)}  placeholder="Postal code"  className={`${logincss.inp} ${register.width40}`}  />
         </div>
         <input type="number" name="Phone" value={val.Phone} onChange={(e)=>handlechange(e)}  placeholder="Phone number"  className={logincss.inp} />
         <input type="password" value={val.password1} onChange={(e)=>handlechange(e)} name="password1"  placeholder="Password" className={logincss.inp} />
         <input type="password" value={val.password2} onChange={(e)=>handlechange(e)} name="password2" placeholder="Password Confirm"  className={logincss.inp} />
         <button type='submit' onClick={e=>handleSubmit(e)} className={logincss.button}>Submit</button>
         
         <div className={logincss.sepraterdiv}>

<hr className={logincss.sepraterhr}/>
<h1 className={logincss.seprateh1}>or</h1>
<hr className={logincss.sepraterhr}/>

</div>

<div style={{position:'relative'}}>
          <img src={google} alt="google"   className={register.img} />
         <button id={logincss.google}  style={{position:'relative'}} className={logincss.button}>Authenticate with google</button></div>
          

       <div> <h2 className={logincss.navs} style={{top:0}}>   Already had a account ?  <Link style={{textDecoration: 'none'}} to={'/login'}> <span style={{color:'black'}}> Login </span></Link></h2>
         <h2 className={logincss.navs} style={{top:0}}>  Do you want to sell crops?    <Link style={{textDecoration: 'none'}} to={'/farmer/register'}>  <span style={{color:'black'}}>Join as farmer</span></Link></h2>
         </div> 
         </div>
  </div>
  <img src={Bguser} className={register.image} />


    </div>
    
    <div className={logincss.footer}></div>
    </React.Fragment>
  )
}

export default Register