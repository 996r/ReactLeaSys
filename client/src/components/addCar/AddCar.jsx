import { useNavigate } from "react-router";
import useRequest from "../hooks/useRequest";
import useForm from "../hooks/useForm";


export default function AddCar() {

    const navigate = useNavigate();
    const {request} = useRequest ();

    const addCarHandler = async (values) => {
        const data = values;
        data._createdOn = Date.now();

        try {
            await request ("/data/cars", "POST", data);
            navigate("/collection");
        } catch (err) {
            alert(err.message);
        }
    };

    const {register, formAction} = useForm (addCarHandler, {
        mark: '',
        model: '',
        price: '',
        date_of_manufacture:'',
        imageUrl: '',
        summary: '',
        category: '',
    });



    return(
     <section className="contact" id="contact">
  <div className="contact-container">
    <div className="contact-header">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">We'd love to hear from you</p>
    </div>
    <div className="contact-content" style={{"-webkit-animation":"0.8s ease 0s 1 normal forwards running _fadeInUp","animation":"0.8s ease 0s 1 normal forwards running _fadeInUp"}}>
      <div className="contact-form-wrapper">
        <form id="contactForm" action={formAction}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mark">Mark</label>
              <input type="text" id="mark" {...register('mark')} placeholder="Nissan" required />
            </div>
            <div className="form-group">
              <label htmlFor="model">Model</label>
              <input type="text" id="model" {...register('model')} placeholder="GTR" required />
            </div>
          </div>
          <div className="form-row">
          <div className="form-group">
              <label htmlFor="category">Category</label>
              <input type="text" id="category" {...register('category')} placeholder="Sport" required />
            </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="text" id="price" {...register('price')} placeholder="0 EUR" required />
          </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Year</label>
            <input type="text" id="year" {...register('date_of_manufacture')} placeholder="2000" required />
          </div>
         <div className="form-group">
            <label htmlFor="imageUrl">Image Url</label>
            <input type="text" id="imageUrl" {...register('imageUrl')} placeholder="https://image.url" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Summary</label>
            <textarea 
              id="summary" 
              {...register('summary')} 
              placeholder="Car Description..." 
              required 
              // ❌ REMOVED: defaultValue={""} 
            />
          </div>
          
          <button type="submit" className="form-submit">Add Car</button>
        
        </form>
      </div>
    </div>     
  </div>
</section>
    );
}