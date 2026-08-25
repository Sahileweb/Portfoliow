'use client';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const params = {
      from_name:  `${formRef.current.fname.value} ${formRef.current.lname.value}`.trim(),
      from_email: formRef.current.email.value,
      subject:    formRef.current.subject.value,
      message:    formRef.current.message.value,
    };
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        params,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      setStatus('sent');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 4500);
    }
  }

  const btnLabel = {
    idle:    <><i className="fa-solid fa-paper-plane" /> Send Message</>,
    sending: <><i className="fa-solid fa-spinner fa-spin" /> Sending…</>,
    sent:    <><i className="fa-solid fa-check" /> Message Sent!</>,
    error:   <><i className="fa-solid fa-triangle-exclamation" /> Failed — Try Again</>,
  };

  return (
    <section id="contact">
      <div className="section-inner">
        <span className="s-label-dark reveal">Let&apos;s connect</span>
        <h2 className="s-title s-title-dark reveal">Get In <span>Touch</span></h2>
        <div className="s-line-dark reveal" />

        <div className="contact-wrap">
          {/* Info */}
          <div className="contact-info reveal">
            <p className="contact-bio">
              I&apos;m always open to new opportunities, collaborations, or just a friendly
              chat about tech. Fill in the form and I&apos;ll reply soon!
            </p>

            <a href="mailto:sahil2003mundhe@gmail.com" className="cinfo-row">
              <div className="cinfo-icon"><i className="fa-solid fa-envelope" /></div>
              <div>
                <div className="cinfo-label">Email</div>
                <div className="cinfo-value">sahil2003mundhe@gmail.com</div>
              </div>
            </a>

            <a href="tel:+919082593175" className="cinfo-row">
              <div className="cinfo-icon"><i className="fa-solid fa-phone" /></div>
              <div>
                <div className="cinfo-label">Phone</div>
                <div className="cinfo-value">+91 9082593175</div>
              </div>
            </a>

            <div className="cinfo-row">
              <div className="cinfo-icon"><i className="fa-solid fa-location-dot" /></div>
              <div>
                <div className="cinfo-label">Location</div>
                <div className="cinfo-value">Mumbai, Maharashtra, India</div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/Sahileweb" className="social-link"
                 target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github" /> GitHub
              </a>
              <a href="https://linkedin.com" className="social-link"
                 target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <form className="contact-form reveal" onSubmit={handleSubmit} ref={formRef}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fname">First Name</label>
                <input id="fname" name="fname" type="text" placeholder="John" required />
              </div>
              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <input id="lname" name="lname" type="text" placeholder="Doe" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Project Collaboration" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5}
                placeholder="Hi Sahil, I'd love to discuss…" required />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`submit-btn${status === 'sent' ? ' sent' : ''}${status === 'error' ? ' errored' : ''}`}
            >
              {btnLabel[status]}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
