import styles from '../styles/Contacts.module.scss'
import React, { useRef } from 'react'

const Contacts = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log('email', form.email.value);
    console.log('name', form.fullname.value);
    console.log('name', form.msg.value);
  };
  return (
    <div className={styles.container}>
      <h2>Shoot me a message and I'll contact you</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputfield}>
          <input
            id="email"
            name="email"
            required
            placeholder=' Email'
          />
        </div>
        <div className={styles.inputfield}>
          <input
            id="fullname"
            name="fullname"
            required
            placeholder=' Name'
          />
        </div>
        <div className={styles.inputfield}>
          <textarea
            id="msg"
            name="msg"
            required
            rows={4}
            cols={18}
            placeholder=' Whats your website about?'
          />
        </div>
        <button className={styles.btn} type="submit">Submit</button>
      </form>
      <div className={styles.whatsapp}>
        <a href="https://wa.me/918480966928?text=Hi%2C%20there!%20I'm%20Kuldeep.%20I%20understand%20the%20importance%20of%20having%20a%20website%20that%20showcases%20your%20business%20and%20resonates%20with%20your%20audience.%20Lets%20bring%20your%20website%20to%20life." target="_blank" rel="noopener noreferrer"><img src="assets/images/whatsapp.png" alt="" /></a>
      </div>
    </div>
  )
}

export default Contacts