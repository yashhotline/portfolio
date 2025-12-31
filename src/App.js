import React from 'react';
import './App.css';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID"); 
  if (state.succeeded) return <p className="success">Thanks! I'll get back to you soon.</p>;
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input id="email" type="email" name="email" placeholder="Email Address" required />
      <textarea id="message" name="message" placeholder="Your Message" rows="4" required />
      <button type="submit" disabled={state.submitting} className="btn">Send Message</button>
    </form>
  );
}

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Yashwant Shukla</h1>
        <p className="lead">Full Stack Developer</p>
        <div className="socials">
          <a href="https://www.linkedin.com/in/yashwant-shukla/">LinkedIn</a>
          <a href="https://github.com/yashwant-shukla">GitHub</a>
        </div>
      </header>

      <div className="card">
        <h2>About Me</h2>
        <p>Experienced in React.js, Node.js, and building scalable web solutions.</p>
        <div className="tags">
          <span>React</span><span>Node.js</span><span>JavaScript</span><span>MongoDB</span>
        </div>
      </div>

      <div className="card">
        <h2>Contact Me</h2>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;