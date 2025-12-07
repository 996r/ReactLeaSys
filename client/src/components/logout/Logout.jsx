import { useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/UserContext";

export default function Logout() {
  const navigate = useNavigate();
  
  const{logoutHandler} = useContext(UserContext);

  logoutHandler()
    .then(() => navigate("/"))

    .catch(() => {
      alert('');
      navigate("/");
    })

  return null;
}
