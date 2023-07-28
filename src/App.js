
import './App.css';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './components/CheckoutForm';
import { PayPalButton } from './components/PaypalPayment';


const public_key = "pk_test_Pq2BDpPTNhfsFHllBvY2GV6700TYOgJ1cD";
const secret_key = "sk_test_pggpOl1FECwCoLsgXDTQjtjF00An8mKwrj"
const stripePromise = loadStripe(public_key);
const id = 123;

function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: `${id}_secret_${secret_key}`,
  }



  return (
    <div className="App">
      <h1>Hello world</h1>
      {/* <Elements stripe={stripePromise} >
      <CheckoutForm />
    </Elements> */}

    <PayPalButton/>
    </div>
  );
}

export default App;
