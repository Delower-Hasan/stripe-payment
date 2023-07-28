import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const PayPalCredentials = {
  "client-id": "sandbox-abcdefghijklm1234567890",
  // Add any other optional PayPal settings here if needed
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <PayPalScriptProvider options={PayPalCredentials}>
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>
);

