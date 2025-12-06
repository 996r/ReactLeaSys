const BASE_URL = "http://localhost:3030/jsonstore/cars";
import Car from "../car/Car";
import { useEffect, useState } from "react";


export default function Collection() 

  {

    const[cars, setCars] = useState([]);

     useEffect(() => {
        // Define an async function to handle the fetch operation
        const fetchCars = async () => {
            try {
                const response = await fetch(BASE_URL);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                   const data = await response.json();
                
                const carsArray = Object.values(data);
                
                setCars(carsArray);

            } catch (error) {
                
                console.error("Failed to fetch car data:", error);
                alert("Could not load car data. Check the server connection.");
            }
        };

    
        fetchCars();

        },[]);

        const carList = cars.map(car => (
            <Car key  = {car._id || car.mark + car.model} {...car} />
        ));

        const content = cars.content = cars.length > 0
        ? carList
        : <p className="no-cars">No cars found in the collection.</p>;




    return (
<section className="collections" id="collections">
            <div className="section-header">
                <h2 className="section-title">Latest Collections</h2>
                <p className="section-subtitle">Discover our curated selection</p>
            </div>
            
            <div className="category-tabs">
                <button className="tab-btn active" data-category="all">All</button>
                <button className="tab-btn" data-category="sport">Sport</button>
                <button className="tab-btn" data-category="suv">SUV</button>
                <button className="tab-btn" data-category="luxury">Luxury</button>
                <button className="tab-btn" data-category="limited">Limited Edition</button>
            </div>

            <div className="grid" id="collectionsGrid">
                {/* 4. Render the dynamically created car list here */}
                {content}
            </div>
        </section>
    );
}