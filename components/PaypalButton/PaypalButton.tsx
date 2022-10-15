import React, { ComponentType } from 'react';
import styles from "./PaypalButton.module.scss";
import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";

const PaypalButton: ComponentType<{ cost: string, disabled: boolean }> = ({ cost, disabled }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT as string,
        components: 'buttons',
        currency: 'USD'
      }}
    >
      <PayPalButtons
        style={
          {
            layout: 'horizontal',
            label: disabled ? undefined : 'buynow',
            color: disabled ? 'black' : 'blue',
            tagline: false,
            shape: 'pill',
          }
        }
        className={styles.paypalButton}
        disabled={disabled}
        forceReRender={[cost]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: 'USD',
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
        // @ts-ignore
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