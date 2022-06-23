import React from 'react';
import './Details.css'


let Details =(props)=>{
    
    let {img,name,email,salary}=props.details;

   

    return(
        <div className='person'>
            <div className='personOne'>
              <img src={img} alt="" />
            </div>
            <div className='personTwo'>
            <h2>Name :{name}</h2>
            
            <p>Email :{email}</p>
            
            <p>Salary :{salary}</p>
            <button
            onClick={()=>props.clickBtn(props.details)}
            ><i class="fa-solid fa-computer-mouse"><a href='/home'>click here</a></i></button>
            </div>
            
           
            
        </div>
    )
}

export default Details;