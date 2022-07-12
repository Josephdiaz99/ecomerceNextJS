import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe=()=>{

    if(!stripePromise){
        stripePromise=loadStripe();
    }

}
