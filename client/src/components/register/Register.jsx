import { Link } from "react-router";
export default function Register () {


    return (
      
          <section className="contact" id="contact">
  <div className="contact-container">
    <div className="contact-header">
      <h2 className="section-title">Register</h2>
      <p className="section-subtitle">Please fill the form</p>
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
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" placeholder="+359 999888777" required />
          </div>
           <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="*******" required />
            </div>
            <div className="form-group">
              <label htmlFor="rePassword">Re-Password</label>
              <input type="password" id="rePassword" name="rePassword" placeholder="********" required />
            </div>
          
          <button type="submit" className="form-submit">Register</button>
       
        </form>
     
      </div>
    </div>
    
  </div>
</section>
      
    );
}