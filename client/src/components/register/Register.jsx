import { useContext } from "react";
import useForm from "../hooks/useForm";
import { Link, useNavigate } from "react-router";
import UserContext from "../context/UserContext";
export default function Register () {

    const navigate = useNavigate();

    const {registerHandler} = useContext(UserContext)

    const registerSubmitHandler = async (values) => {
        const {email, password, confirmPassword} = values;

          if (!email || !password) {
            return alert('Email and password are required!');
        }

        if (password !== confirmPassword) {
            return alert('Password missmatch!');
        }

        try {
            await registerHandler(email, password);
            navigate('/');
        } catch (err) {
            alert(err.message);
        }
    }
        const {
            register,
            formAction,
            } = useForm(registerSubmitHandler, {
                email:'',
                password: '',
                confirmPassword: '',
            });


    return (
      
          <section className="contact" id="contact">
  <div className="contact-container">
    <div className="contact-header">
      <h2 className="section-title">Register</h2>
      <p className="section-subtitle">Please fill the form</p>
    </div>
    <div className="contact-content">
      <div className="contact-form-wrapper">
        <form id="contactForm" action={formAction}>
          <div className="form-row">
           </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register('email')} placeholder="john@example.com" required />
          </div>
          <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" {...register('password')} placeholder="*******" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password </label>
              <input type="password" id="confirmPassword" {...register('confirmPassword')} placeholder="********" required />
            </div>
          
          <button type="submit" className="form-submit">Register</button>
       
        </form>
     
      </div>
    </div>
    
  </div>
</section>
      
    );
}