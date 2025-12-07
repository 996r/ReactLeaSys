import { useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/UserContext";
import useForm from "../hooks/useForm";

export default function Login() {

    const navigate = useNavigate();

    const {loginHandler} = useContext(UserContext);

    const submitHandler = async ({email, password}) => {

        if(!email || !password) {
            return alert('Email and password are required');
        }
        try {
            await loginHandler(email, password);

            navigate('/');
        } catch(err){
                alert(err.message);
        }
    }

    const {
        register,
        formAction,
    } = useForm(submitHandler, {
        email:'',
        password: '',
    });




    return(
      <section className="contact" id="contact">
  <div className="contact-container">
    <div className="contact-header">
      <h2 className="section-title">Login</h2>
      <p className="section-subtitle">Please enter Email and Password</p>
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
         
          
          <button type="submit" className="form-submit">Login</button>
        </form>
     
      </div>
    </div>
    
  </div>
</section>
    );
}