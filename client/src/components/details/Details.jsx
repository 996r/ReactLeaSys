import { Link, useNavigate, useParams } from "react-router";
import useRequest from "../hooks/useRequest";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { CarDataContext } from "../context/CarDataContext";

export default function Details() {
  const { carId } = useParams();
  const { request } = useRequest();
  const { isAuthenticated, isAdmin } = useContext(UserContext);
  
  const { triggerRefresh } = useContext(CarDataContext);
  const navigate = useNavigate();

  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await request(`/data/cars/${carId}`, "GET");
        setCar(data);
      } catch (error) {
        console.error("Failed to fetch car details:", error);
        alert("Could not load car details. It may have been deleted or moved.");
        navigate("/collection");
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [carId, request, navigate]);

  const onDeleteHandler = async () => {
    if (!isAdmin) {
      alert("Unauthorized action.");
      return;
    }

    if (
      window.confirm(
        `Are you sure you want to delete the ${car?.mark} ${car?.model}?`
      )
    ) {
      try {
        await request(`/data/cars/${carId}`, "DELETE");
        triggerRefresh();
        navigate("/collection");
      } catch (error) {
        console.error("Deletion failed:", error);
      }
    }
  };

  if (isLoading) {
    return <p className="loading">Loading car details...</p>;
  }

  if (!car) {
    return <p className="error">Car not found.</p>;
  }

  return (
    <section className="featured" id="featured">
      <div className="featured-container">
        <div className="featured-hero">
          <div className="featured-content">
            <span className="label">Selected with Passion</span>
            <h2>
              {car.mark} {car.model}
            </h2>
            <p>{car.summary}</p>

            <div className="feature-highlights">
              <div className="highlight-item">
                <div className="highlight-icon"></div>
                <div className="highlight-title">Specs</div>
                <div className="highlight-title">
                  Year: {car.date_of_manufacture}
                </div>
                <div className="highlight-title">Category: {car.category}</div>
                <div className="highlight-title">Price: {car.price} EUR</div>
              </div>
            </div>
            <Link to="/collection" className="feature-cta">
              Back to Collection
            </Link>
            <div>
              {!isAdmin && isAuthenticated  && (
                <Link 
                to={`/cars/${carId}/buy`} 
                className="feature-cta"
            >
                Buy This Car
            </Link>
              )}
              </div>
            <div>
              {isAdmin && (
                <button onClick={onDeleteHandler} className="feature-cta">
                  Delete Car
                </button>
              )}
              {isAdmin && (
                <div>
                  <Link to={`/cars/edit/${carId}`} className="feature-cta">
                    Edit
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="featured-image-section">
            <div className="featured-img">
              <img src={car.imageUrl} alt="Pickup And Delivery" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
