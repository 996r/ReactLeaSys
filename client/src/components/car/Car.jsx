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
               
                <img src={imageUrl} alt={`${mark} ${model}`} /> 
            </div>
            <div className="card-content">
                <span className="card-badge">{category}</span>
                
                <h3 className="card-title">{mark} {model}</h3> 
                <p className="card-subtitle">{category} Collection</p>
               
                <p className="card-price">{price} EUR</p> 
            </div>
        </div>
    );
}