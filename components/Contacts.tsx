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
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
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
        </div>
        <button className={styles.btn} type="submit">Submit</button>
      </form>
      <div className={styles.whatsapp}>
        <img src="assets/images/whatsapp.png" alt="" />
      </div>
    </div>
  )
}

export default Contacts