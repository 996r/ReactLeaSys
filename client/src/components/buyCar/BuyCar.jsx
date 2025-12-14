import { useParams } from "react-router";
import useRequest from "../hooks/useRequest";
import { useState, useEffect } from "react";
import useForm from "../hooks/useForm";

export default function BuyCar() {
  const { carId } = useParams();
  const { request } = useRequest();
  const DETAILS_CAR_API_PATH = "/data/cars";

  const LEASE_INTEREST_RATE = 0.05;
  const MIN_MONTHS = 12;
  const MAX_MONTHS = 60;
  const INITIAL_MONTHS = 36;
  const LEASE_HANDLER_ID = "leaseCalculator";

  const initialValues = {
    months: INITIAL_MONTHS,
    firstPayment: 500,
  };

  const leaseCalculationHandler = (values) => {
    console.log("Lease calculation triggered:", values);
  };

  const { values, register } = useForm(leaseCalculationHandler, initialValues);

  const [carData, setCarData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCarData() {
      try {
        const result = await request(`${DETAILS_CAR_API_PATH}/${carId}`, "GET");
        setCarData(result);
      } catch (error) {
        console.error("Failed to fetch car details for purchase:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCarData();
  }, [carId, request]);

  if (isLoading) {
    return <div>Loading car details for purchase...</div>;
  }

  if (!carData) {
    return <div>Car details not found or failed to load.</div>;
  }

  const calculateMonthlyPayment = () => {
    const carPrice = Number(carData.price);
    const months = Number(values.months);
    const firstPayment = Number(values.firstPayment);

    if (isNaN(carPrice) || isNaN(months) || months < 1 || isNaN(firstPayment)) {
      return "N/A";
    }
    const financedAmount = carPrice - firstPayment;
    const monthlyRate = LEASE_INTEREST_RATE / 12;

    if (monthlyRate === 0) {
      return financedAmount / months;
    }

    const monthlyPayment =
      (financedAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    return monthlyPayment.toFixed(2);
  };

  const monthlyLease = calculateMonthlyPayment();

  return (
    <section className="featured" id="featured">
      <div className="featured-container">
        <div className="featured-hero">
          <div className="featured-content">
            <span className="label">Selected with Passion</span>
            <h2>
              {carData.mark} {carData.model}
            </h2>
            <p>{carData.summary}</p>

            <div className="feature-highlights"></div>
            <form id="contactForm">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="mark">Mark</label>
                  <input
                    type="text"
                    id="mark"
                    value={carData.mark}
                    readOnly
                    disabled
                    placeholder="Nissan"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mark">Model</label>
                  <input
                    type="model"
                    id="model"
                    value={carData.model}
                    readOnly
                    disabled
                    placeholder="GTR"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="model">Year of production</label>
                  <input
                    type="model"
                    id="model"
                    value={carData.date_of_manufacture}
                    readOnly
                    disabled
                    placeholder="GTR"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <input
                    type="category"
                    id="category"
                    value={carData.category}
                    readOnly
                    disabled
                    placeholder="Sport"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price in EURO</label>
                  <input
                    type="price"
                    id="price "
                    value={carData.price}
                    readOnly
                    disabled
                    placeholder="Sport"
                    required
                  />
                </div>
              </div>
              <div className="lease-calculator-wrapper">
                <h3>Lease Calculator</h3>
                <p>
                  Estimated Monthly Payment: <strong>€ {monthlyLease}</strong>
                </p>

                <form
                  id={LEASE_HANDLER_ID}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="form-group">
                    <label htmlFor="firstPayment">
                      First Payment / Taxes (EUR)
                    </label>
                    <input
                      type="number"
                      id="firstPayment"
                      placeholder="500"
                      step="50"
                      required
                      {...register("firstPayment")}
                    />
                  </div>

                  <div className="form-group slider-group">
                    <label htmlFor="months">
                      Lease Duration: **{values.months}** Months
                    </label>
                    <input
                      type="range"
                      id="months"
                      min={MIN_MONTHS}
                      max={MAX_MONTHS}
                      step="1"
                      required
                      {...register("months")}
                    />
                    <small>
                      Min: {MIN_MONTHS} mo. | Max: {MAX_MONTHS} mo.
                    </small>
                  </div>
                </form>
              </div>
            </form>
          </div>
          <div className="featured-image-section">
            <div className="featured-img">
              <img src={carData.imageUrl} alt="Pickup And Delivery" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
