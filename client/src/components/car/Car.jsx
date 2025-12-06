export default function Car ({
    _id,
    mark,
    model,
    price,
    date_of_manufacturer,
    category,
    imageUrl,   
}) {
    return (
        <div className="collection-card" data-category={category}>
            <div className="collection-thumbnail">
                {/* Use the descriptive mark/model for alt text */}
                <img src={imageUrl} alt={`${mark} ${model}`} /> 
            </div>
            <div className="card-content">
                <span className="card-badge">{category}</span>
                {/* Add a space between mark and model */}
                <h3 className="card-title">{mark} {model}</h3> 
                <p className="card-subtitle">{category} Collection</p>
                {/* Format price to ensure two decimal places if needed */}
                <p className="card-price">{price.toFixed(2)} EUR</p> 
            </div>
        </div>
    );
}