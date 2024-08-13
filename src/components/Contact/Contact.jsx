import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [form, setForm] = useState({
    subject: 'this is from portfolio',
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_9hcay6d', 'template_bdtekug', form, 'IYsohbHAmQVgu__7O')
    .then((result) => {
      setStatus(<h3 style={{ color: 'green' , textAlign: 'center'}}>Thank you for messaging</h3>);
      setForm({subject: '', name: '', email: '', contact: '', message: '' });
      }, (error) => {
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <footer id="contact" className={styles.line}>      
    <div className={styles.container}>

      <div className={styles.lets_chart}><h1> Let's chat....</h1></div>
        <div className={styles.lets_chart1}><h3>Tell me about your project</h3></div>
        <div className={styles.lets_chart2}><p> Let's create something together ✨</p></div>
      <div className="innerContainer">
        <div className={styles.formContainer}>
          <h2>Contact to us </h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              Name:
              <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>
              Contact Number:
              <input type="text" name="contact" value={form.contact} onChange={handleChange} required/>
            </label>
            <label>
              Message:
              <textarea name="message" value={form.message} onChange={handleChange} required />
            </label>
            <button type="submit">Send</button>
            {status && <p>{status}</p>}
          </form>
        </div>
        <div className={styles.linksContainer}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
              <a href="mailto:manikantakotti9275@gmail.com">myemail@email.com</a>
            </li>
            <li className={styles.link}>
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
              />
              <a href="https://www.linkedin.com/in/manikanta-kotti-2a3040289/">linkedin.com</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
              <a href="https://github.com/manikanta9275">github.com</a>
            </li>
          </ul>
        </div> 
      </div>
      </div>
    </footer>
  );
};
