import React from "react";
import axios from "axios"
import StripeCheckout from "react-stripe-checkout"
// import "./App.css";
// import "../A"

const REACT_STRIPE_KEY = "danrit project key"
const Stripe = () => {
    const handleToken = async(token) => {
        try{
            //sending a post request to the backend API to create new payment
            const response = await axios.post('/api/payments', {
                amount: 10,
                currency: 'USD',
                description: "Test Payment for Danrit",
                token
            });
            console.log(response.data)
            alert('Payment was successful');
        }
        catch(error){
            console.log(error)
            alert('Ppayment failed try again')
        }
    }
    return ( 
        <div className="stripe">
           <header className="stripe-header">
              <h1>DANRIT stripe payment gateway testing</h1>
               <StripeCheckout stripeKey={REACT_STRIPE_KEY}
               token={handleToken}
               amount={1000}
               currency="USD"
               name="Danrit Payment test"
               description="Testing Danrit Payment Gateway">

                <button className="btn">Pay Now</button>

               </StripeCheckout>
           </header>
        </div>
     );
}
 
export default Stripe;