import { useEffect, useState } from "react";
import { Link } from "react-router";


// const BASE_URL = "http://localhost:3030/jsonstore/cars";
const BASE_URL = "https://reactleasysserver.onrender.com/jsonstore/cars";

export default function Hero() {

    const [cars, setCars] = useState ([]);

    const [currentSlide, setCurrentSlide] = useState(0);

    const CAROUSEL_INTERVAL = 5000; 

    useEffect(() => {
        const fetchCars = async () => {
        try{
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const carsArray = Object.values(data);

                setCars(carsArray);
        }catch (error) {
                console.error("Failed to fetch car data for hero:", error);
            }
        };

        fetchCars();
    },[]);

    useEffect(() => {
             if (cars.length > 0) {
            const timer = setInterval(() => {
                
                setCurrentSlide(prevSlide => 
                    (prevSlide + 1) % cars.length
                );
            }, CAROUSEL_INTERVAL);

            return () => clearInterval(timer);
        }
    }, [cars.length, CAROUSEL_INTERVAL]); 

    const isActive = (index) => index === currentSlide ? 'active' : '';


    return(
      <section className="hero" id="home">
            <div className="hero-bg"></div>
            <div className="hero-container">
                <div className="hero-left">
                    <div className="hero-badge">New Collection 2025</div>
                    <h1 className="hero-title">
                        <span className="line"><span>Get</span></span>
                        <span className="line"><span>Your <span className="accent">Dream</span></span></span>
                        <span className="line"><span>Car</span></span>
                    </h1>
                    <p className="hero-description">
                        Discover our avant-garde collection where high standards meets street culture. 
                        Each car tells a story of rebellion, elegance, and innovation.
                    </p>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Exclusive Pieces</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">48H</span>
                            <span className="stat-label">Fast Delivery</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Guarantee</span>
                        </div>
                    </div>
                    <div className="cta-group">
                        <Link to="/collection" className="cta-button primary">Explore Collection</Link>
                        <Link to="/feature" className="cta-button outline">Exlusive Services</Link>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="hero-image-wrapper">
                        <div className="hero-carousel">
                           
                            {cars.map((car, index) => (
                                <div 
                                    key={car._id || index}
                                    className={`carousel-slide ${isActive(index)}`}
                                >
                                    <img 
                                        src={car.imageUrl} 
                                        alt={`${car.mark} ${car.model}`} 
                                    />
                                </div>
                            ))}
                            
                            <div className="carousel-overlay"></div>
                            
                           
                            <div className="carousel-indicators">
                                {cars.map((_, index) => (
                                    <span 
                                        key={index}
                                        className={`indicator ${isActive(index)}`}
                                        data-slide={index}
                                        onClick={() => {
                                            setCurrentSlide(index);
                                            
                                        }}
                                    ></span>
                                ))}
                            </div>
                        </div>
                        <div className="floating-tags">
                            <div className="tag">Limited Edition</div>
                            <div className="tag">High Performance</div>
                            <div className="tag">V8 Engine</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <span></span>
            </div>
        </section>
    )
}
