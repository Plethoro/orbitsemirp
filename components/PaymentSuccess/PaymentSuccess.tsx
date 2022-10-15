import React, { ComponentType } from 'react';
import styles from "./PaymentSuccess.module.scss";

const PaymmentSuccess: ComponentType<{ setShowOverlay: Function }> = ({ setShowOverlay }) => (
  <div id={styles.paymentSuccess}>
    <h1>Thank you for your purchase!</h1>
    <h3>One of our admins will update your account shortly!</h3>
    <button onClick={() => { setShowOverlay(false) }}>Awesome!</button>
  </div>
)

export default PaymmentSuccess