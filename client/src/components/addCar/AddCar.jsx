

export default function AddCar() {

    return(
     <section className="contact" id="contact">
  <div className="contact-container">
    <div className="contact-header">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">We'd love to hear from you</p>
    </div>
    <div className="contact-content" style={{"-webkit-animation":"0.8s ease 0s 1 normal forwards running _fadeInUp","animation":"0.8s ease 0s 1 normal forwards running _fadeInUp"}}>
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
    </div>     
  </div>
</section>
    );
}