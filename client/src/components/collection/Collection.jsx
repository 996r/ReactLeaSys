const BASE_URL = "http://localhost:3030/jsonstore/cars";
import Car from "../car/Car";
import { useEffect, useState } from "react";


export default function Collection() 

  {

    const[cars, setCars] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState('all');

     useEffect(() => {
      
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

        const handleCategoryClick = (category) => {
            setSelectedCategory(category);
        };

        const filteredCars = selectedCategory  === 'all'
        ? cars
        : cars.filter(car => car.category.toLowerCase() === selectedCategory.toLowerCase());

        const carList = filteredCars.map(car => (
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
               
               
                {['all', 'sport', 'suv', 'luxury', 'limited'].map(category => (
                    <button 
                        key={category}
                        className={`tab-btn ${selectedCategory === category ? 'active' : ''}`}
                        data-category={category}
                      
                        onClick={() => handleCategoryClick(category)}
                    >
                       
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                        {category === 'limited' && ' Edition'}
                    </button>
                ))}
            </div>

            <div className="grid" id="collectionsGrid">
                {content}
            </div>
        </section>
    );
}