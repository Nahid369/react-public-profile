import React, {useState} from 'react';
import './Look.css'
import fakeData from '../../fakeData'
import Details from '../Details/Details'
import Cart from '../Cart/Cart';

let Look =()=>{
    let firstTenNames = fakeData.slice(0,10);
    let [names,getNames]=useState(firstTenNames)

    let [cart, setCart]=useState([])

    let clickBtn =(details)=>{
        console.log(`yah button clicked`, details)
        let newCart =[...cart, details]
        setCart(newCart)
    }


    return(
        <div className='firstCom'>
            <div className="prothom">
              <h4>{names.length}</h4>
                {
                    names.map(user =><Details 
                        clickBtn ={clickBtn}
                        details={user}></Details>)
                }
            
            </div>
            <div className="second">
            <Cart cart={cart}>
             <p>person clicked : {cart.length}</p>
            </Cart>
              
            </div>
            
        </div>
        
    )
}

export default Look;