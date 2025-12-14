import { useNavigate, useParams } from "react-router";
import useRequest from "../hooks/useRequest.js";
import { useContext, useEffect, useState } from "react";
import { CarDataContext } from "../context/CarDataContext";
import useForm from "../hooks/useForm.js";

const EDIT_CAR_API_PATH = "/data/cars";

export default function EditCar() {
  const { carId } = useParams();
  const navigate = useNavigate();
  const { request } = useRequest();
  const { triggerRefresh } = useContext(CarDataContext);

  const CATEGORIES = ["Sport", "SUV", "Luxury", "Limited Edition"];

  const [isLoading, setIsLoading] = useState(true);

  const editCarHandler = async (values) => {
    const carData = {
      ...values,
      price: values.price.toString(),
    };
    try {
      await request(`${EDIT_CAR_API_PATH}/${carId}`, "PUT", carData);

      triggerRefresh();
      navigate(`/cars/${carId}`);
    } catch (err) {
      alert(`Failed to update car: ${err.message}`);
    }
  };

  const { register, formAction, setValues } = useForm(editCarHandler, {
    mark: "",
    model: "",
    price: "",
    date_of_manufacture: "",
    imageUrl: "",
    summary: "",
    category: "",
  });

  useEffect(() => {
    setIsLoading(true);
    request(`${EDIT_CAR_API_PATH}/${carId}`, "GET")
      .then((result) => {
        setValues(result);
      })
      .catch((error) => {
        console.error("Failed to fetch car for editing:", error);
        alert("Could not load car data. Check console for details.");
        navigate("/collection");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [carId, request, navigate, setValues]);

  if (isLoading) {
    return <p className="loading">Loading car data for editing...</p>;
  }
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Edit Car</h2>
          <p className="section-subtitle">Update the car details below</p>
        </div>
        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form id="contactForm" onSubmit={formAction}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="mark">Mark</label>
                  <input
                    type="text"
                    id="mark"
                    {...register("mark")}
                    placeholder="Nissan"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="model">Model</label>
                  <input
                    type="text"
                    id="model"
                    {...register("model")}
                    placeholder="GTR"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    {...register("category")}
                    required
                    className="form-group"
                  >
                    <option value="" disabled hidden>
                      Select a Category
                    </option>

                    {CATEGORIES.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    id="price"
                    {...register("price")}
                    placeholder="0 EUR"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="year">Year</label>
                <input
                  type="text"
                  id="year"
                  {...register("date_of_manufacture")}
                  placeholder="2000"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="imageUrl">Image Url</label>
                <input
                  type="text"
                  id="imageUrl"
                  {...register("imageUrl")}
                  placeholder="https://image.url"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="summary">Summary</label>
                <textarea
                  id="summary"
                  {...register("summary")}
                  placeholder="Car Description..."
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                Update Car
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
