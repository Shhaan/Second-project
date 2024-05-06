import React from 'react'
import Header from '../../../Components/athenticationHeader/Header'

import AdminRegistercss from './RegTransaction.module.css'
import Bg from '../../../Asset/Image/bgreg.jpg'

import logincss from '../../Customer/Login/Login.module.css'

const RegTransaction = () => {
  return (
    <React.Fragment>
         <Header admin={false}/>
         <div   style={{backgroundImage:`url(${Bg})`, backgroundSize: 'cover' }} className='py-5' >

            <div className="col-10 col-sm-7 col-lg-5 m-auto pb-5" style={{backgroundColor:'#77E87B'}}> 
            <h1 className={logincss.mainhead}>Complete Transaction</h1>


            <div className={`${AdminRegistercss.paymentmessage} ms-4 mt-4`}>
  <h1>You have to pay 50 rupees as advance</h1>
  <h2>Please pay with any transaction method listed below</h2>
   
   <div className={`${AdminRegistercss.mainflexdiv} col-9`}>
      <div className='bg-white' style={{height: '41px',padding:'10px'}}>Paypal</div>
      <div className='bg-white' style={{height: '41px',padding:'10px'}}>Razor pay</div>
      <div className='bg-white' style={{height: '41px',padding:'10px'}}>Google pay</div>

   </div>

</div>

            </div>



            </div>

            <div className={logincss.footer}></div>
    </React.Fragment>
  )
}


export default RegTransaction