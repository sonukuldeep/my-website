import styles from '../styles/Contacts.module.scss'

const Contacts = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log('email', form.email, form.elements.email);
    console.log('name', form.name, form.elements.name);
  }

  return (
    <div className={styles.container}>
      <h2>Contact me</h2>
      <p>Get in touch</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="msg">Message</label>
          <textarea
            id="msg"
            name="msg"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contacts