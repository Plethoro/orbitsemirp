import React, { ComponentType } from 'react';
import styles from "./PaypalButton.module.scss";
import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";

const PaypalButton: ComponentType<{ cost: string }> = ({ cost }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT as string,
        components: 'buttons',
        currency: 'CAD'
      }}
    >
      <PayPalButtons
        style={
          {
            layout: 'horizontal',
            label: 'buynow',
            color: 'blue',
            tagline: false,
            shape: 'pill',
          }
        }
        className={styles.paypalButton}
        disabled={false}
        forceReRender={[cost]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: 'CAD',
                    value: cost,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order?.capture().then(function () {
            // Your code here after capture the order
          });
        }}
      />
    </PayPalScriptProvider>
  )
}

export default PaypalButton