import UserContext from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router";
import { CarDataContext } from "../context/CarDataContext";
import useRequest from "../hooks/useRequest";

export default function Car({
  _id,
  mark,
  model,
  price,
  date_of_manufacturer,
  category,
  imageUrl,
}) {
  const { isAdmin } = useContext(UserContext);
  const {setRefreshKey} = useContext(CarDataContext);
  const {request} = useRequest();

  const onDeleteHandler = async () => {

    if(!isAdmin) {
        alert("Unauthorized Action.");
        return;
    }
    if (window.confirm(`Are you sure you want to delete this car ${mark} ${model} ?`)) {
    
        const deleteUrl = `/data/cars/${_id}`;
        await request(deleteUrl, 'DELETE');
        setRefreshKey (prev => prev +1);
        console.log(`Successfully deleted car with ID: ${_id}`);
        
}
  };

  return (
    <div className="collection-card" data-category={category}>
      <div className="collection-thumbnail">
        <img src={imageUrl} alt={`${mark} ${model}`} />
      </div>
      <div className="card-content">
        <span className="card-badge">{category}</span>

        <h3 className="card-title">
          {mark} {model}
        </h3>
        <p className="card-subtitle">{category} Collection</p>

        <p className="card-price">{price} EUR</p>
      </div>
      <div className="card-content">
        <Link to={`/cars/${_id}`} className="card-badge">
          Details
        </Link>
        {isAdmin && (
          <div className="admin-actions">
            <Link to={`/cars/edit/${_id}`} className="card-badge">
              Edit
            </Link>
            <div>
              <button onClick={onDeleteHandler} className="card-badge">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
