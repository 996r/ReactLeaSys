export default function Login() {

    return(
      <section className="contact" id="contact">
  <div className="contact-container">
    <div className="contact-header">
      <h2 className="section-title">Login</h2>
      <p className="section-subtitle">Please enter Email and Password</p>
    </div>
    <div className="contact-content">
      <div className="contact-form-wrapper">
        <form id="contactForm">
          <div className="form-row">
          
            </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required />
          </div>
         
           <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="*******" required />
            </div>
         
          
          <button type="submit" className="form-submit">Login</button>
        </form>
     
      </div>
    </div>
    
  </div>
</section>
    );
}