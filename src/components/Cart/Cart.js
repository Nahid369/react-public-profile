import React from 'react';

const Cart = (props) => {
    let cart=props.cart
  // let totalPrice =cart.reduce((total,prd)=>total + prd.salary, 0)

  let totalPrice=0;
  for(let i=0; i<cart.length; i++){
    let details =cart[i]
    totalPrice += details.salary
  }

  let vat =Math.round(totalPrice/13)
  let afterVat = totalPrice -vat
  let yearlySalary =afterVat * 12
    return (
        <div>
            <h1>Person history</h1>
            <h2>person clicked :{cart.length}</h2>
            <p>total salary :{totalPrice}</p> 
            <p>vat :{vat}</p>
            <p>salary with vat:{afterVat}</p>
            <p>Yearly salary: {yearlySalary}</p>
        </div>
    );
};

export default Cart;