import React, { ComponentType } from 'react';
import styles from "./PaymentSuccess.module.scss";

const PaymmentSuccess: ComponentType<{ setShowOverlay: Function }> = ({ setShowOverlay }) => (
  <div id={styles.paymentSuccess}>
    <svg viewBox='0 0 1920 1080' id={styles.grain}>
      <filter id='noiseFilter'>
        <feTurbulence
          type='fractalNoise'
          baseFrequency='0.65'
          numOctaves='3'
          stitchTiles='stitch'
        />
      </filter>

      <rect width='100%' height='100%' filter='url(#noiseFilter)'></rect>
    </svg>

    <div id={styles.details}>
      <h1>Thank you for your purchase!</h1>
      <h3>One of our admins will update your account shortly!</h3>
      <button onClick={() => { setShowOverlay(false) }}>Awesome!</button>
    </div>
  </div>
)

export default PaymmentSuccess