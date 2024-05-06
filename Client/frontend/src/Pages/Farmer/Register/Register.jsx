import React,{useState} from 'react'
import Header from '../../../Components/athenticationHeader/Header'
import logincss from '../../Customer/Login/Login.module.css'
import Bg from '../../../Asset/Image/bgreg.jpg'
import farmerRegister from './Register.module.css'
const Register = () => {

  
  const [formData, setFormData] = useState({
    First_name: '',
    Cultivating_crop: '',
    Last_name: '',
    bio: '',
    Email: '',
    Location: '',
    Phone: '',
    Award: '',
    Date_of_birth: '',
    Address: '',
    Password1: '',
    Country: '',
    Password2: '',
    State: '',
    District: '',
    Zip_code: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }));
};

  return(

    <React.Fragment>
        <Header admin={false}/>
        
    <div   style={{backgroundImage:`url(${Bg})`, backgroundSize: 'cover' }} className='py-4' >

    <div className={farmerRegister.innerdiv}>
  <h1 className={logincss.mainhead}>Register as farmer</h1>
        <div className={farmerRegister.gridDiv}>

          
         <input type="text" name="First_name" value={formData.First_name}  onChange={(e)=>handleChange(e)} placeholder="First Name" className={logincss.inp} />
         <input type="text" name="Cultivating_crop" value={formData.Cultivating_crop} onChange={(e)=>handleChange(e)} placeholder="Cultivating crop" className={logincss.inp} />
         <input type="text" name="Last_name" value={formData.Last_name} onChange={(e)=>handleChange(e)} placeholder="Last Name" className={logincss.inp} />
         
          <textarea name="bio" placeholder='Bio' value={formData.bio} onChange={(e)=>handleChange(e)} className={logincss.inp} ></textarea>
          <input type="email" name="Email" onChange={(e)=>handleChange(e)} placeholder="Email" className={logincss.inp} />
         
         <input type="text" name="Location" value={formData.Location} onChange={(e)=>handleChange(e)} placeholder="Field Location" className={logincss.inp} />

         <input type="tel" name="Phone" value={formData.Phone} onChange={(e)=>handleChange(e)} placeholder="Phone Number" className={logincss.inp} />
         <input type="text" name="Award" value={formData.Award} onChange={(e)=>handleChange(e)} placeholder="Award if Any" className={logincss.inp} />
         <input type="date" name="Date_of_birth" value={formData.Date_of_birth} onChange={(e)=>handleChange(e)} placeholder="Date of birth" className={logincss.inp} />
          
          <div className={farmerRegister.sectiondiv}>
          <div style={{position:'relative'}}>
          <input type="file" name="Field_photo" placeholder="Field_photo" className={farmerRegister.customfileuploadinp} />
          <div className={`${farmerRegister.customfileuploaddiv}`}>Field photo</div>
          </div>
          <div style={{position:'relative'}}>
          <input type="file" name="Map_location" placeholder="Map location" className={farmerRegister.customfileuploadinp} />
          <div className={`${farmerRegister.customfileuploaddiv}`}>Map location</div>
          </div>
          </div>

        <textarea name="Address" value={formData.Address} className={logincss.inp} onChange={(e)=>handleChange(e)}  placeholder='Address'></textarea>
         <input type="password" value={formData.Password1} name="Password1" onChange={(e)=>handleChange(e)} placeholder="Password" className={logincss.inp} />
         <input type="text" value={formData.Country} name="Country" onChange={(e)=>handleChange(e)} placeholder="Country" className={logincss.inp} />
         <input type="password" value={formData.Password2} name="Password2" onChange={(e)=>handleChange(e)} placeholder="Password Confirm" className={logincss.inp} />
               
        <div className={farmerRegister.sectiondiv}>
        <input type="text" name="State" value={formData.State} onChange={(e)=>handleChange(e)} placeholder="State" className={logincss.inp} />
         <input type="text" name="District" value={formData.District} onChange={(e)=>handleChange(e)} placeholder="District" className={logincss.inp} />
        
         <div style={{position:'relative'}}>
          <input type="file" name="Farmer_photo" placeholder="Farmer photo" className={farmerRegister.customfileuploadinp} />
          <div className={`${farmerRegister.customfileuploaddiv}`}>Farmer photo</div>
          </div>
    
         <input type="number" name="Zip_code" value={formData.Zip_code} onChange={(e)=>handleChange(e)} placeholder="Zip Code" className={logincss.inp} />
        </div>
 



        </div>
  
        <button type='submit'    className={`${logincss.button} col-lg-4 col-md-4  mt-5 d-block`}>Move to transaction</button>
         
  
  </div>


    </div> <div className={logincss.footer}></div>
    </React.Fragment>
  )
}

export default Register