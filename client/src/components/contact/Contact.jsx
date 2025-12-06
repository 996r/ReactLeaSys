export default function Contact () {
    return (
     <section className="contact" id="contact">
  <div className="contact-container">
    <div className="contact-header">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">We'd love to hear from you</p>
    </div>
    <div className="contact-content">
      <div className="contact-form-wrapper">
        <form id="contactForm">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" placeholder="John" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" placeholder="Doe" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="How can we help?" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell us more about your inquiry..." required defaultValue={""} />
          </div>
          <button type="submit" className="form-submit">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <div className="info-item">
          <div className="info-icon">📍</div>
          <div className="info-content">
            <h3>Visit Our Flagship Store</h3>
            <p>123 Fashion Avenue<br />
              Bangkok, Thailand 10110<br />
              Siam District</p>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon">📞</div>
          <div className="info-content">
            <h3>Call Us</h3>
            <p>Main: <a href="tel:+66021234567">+66 02 123 4567</a><br />
              Support: <a href="tel:+66021234568">+66 02 123 4568</a><br />
              Mon-Fri, 9AM-6PM ICT</p>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon">✉️</div>
          <div className="info-content">
            <h3>Email Us</h3>
            <p>General: <a href="mailto:hello@noir.fashion">hello@noir.fashion</a><br />
              Support: <a href="mailto:support@noir.fashion">support@noir.fashion</a><br />
              Press: <a href="mailto:press@noir.fashion">press@noir.fashion</a></p>
          </div>
        </div>
      </div>
    </div>
    <div className="map-section">
      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.551370220076!2d100.53515!3d13.730314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2993fa2f8c6d9%3A0x92cf0e47c4c2ed08!2sSilom%20MRT%20Station!5e0!3m2!1sen!2sth!4v1697000000000" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  </div>
</section>
    )
}