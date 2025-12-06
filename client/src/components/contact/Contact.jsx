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
            <h3>Visit Our Showroom</h3>
            <p>Srebarna 16<br />
              Sofia, Buglgaria 1407<br />
              </p>
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
            <p>General: <a href="mailto:hello@noir.fashion">car_lease@carleasebg.com</a><br />
              Support: <a href="mailto:support@noir.fashion">support@carleasebg.com</a><br />
              Press: <a href="mailto:press@noir.fashion">press@carleasebg.com</a></p>
          </div>
        </div>
      </div>
    </div>
    <div className="map-section">
      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.061639200863!2d23.318362776872455!3d42.660049171166754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa845b68b8bb79%3A0xff9aea43ab58c997!2sPromishlena%20zona%20Hladilnika%2C%20Srebarna%20St%2016%2C%201000%20Sofia!5e0!3m2!1sen!2sbg!4v1765028493151!5m2!1sen!2sbg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  </div>
</section>
    )
}