import React, { ComponentType, Dispatch, SetStateAction } from 'react';
import styles from "./PaypalButton.module.scss";
import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";
import axios from 'axios';
import { UserData } from '../../types';

const PaypalButton: ComponentType<{
  cost: string,
  disabled: boolean,
  rank?: string,
  set?: string,
  steamId: string,
  setShowOverlay: Dispatch<SetStateAction<boolean>>,
  setUser: Function,
  userId?: number
}> = ({ cost, disabled, rank, steamId, setShowOverlay, setUser, set, userId }) => {
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
        forceReRender={[cost, disabled]}
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
                  description: rank ? `Rank: ${rank}, SteamId: ${steamId}` : set ? `Set: ${set}, SteamId: ${steamId}`  : ''
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
            if (rank) {
              axios.post('/api/users/updateRank', { steamId, newRank: rank })
                .then(() => {
                  axios.post('/api/users/find', { steamId })
                    .then((res) => {
                      const userData: UserData = res.data.user;
                      setShowOverlay(true);
                      setUser(userData);
                    })
                });
            }

            if (set) {
              axios.post('/api/users/newSet', { steamId, userId, setName: set })
                .then(() => {
                  axios.post('/api/users/find', { steamId })
                    .then((res) => {
                      const userData: UserData = res.data.user;
                      setShowOverlay(true);
                      setUser(userData);
                    })
                });
            }
          });
        }}
      />
    </PayPalScriptProvider>
  )
}

export default PaypalButton