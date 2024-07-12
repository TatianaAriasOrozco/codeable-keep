import { useState } from "react";
import "./styles.module.css";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  //Dirige a la página de gracias
  const handleNavigation = () => {
    localStorage.setItem("username", username);
    navigate("/dashboard");
  };

  const change = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  return (
    <div>
      <h1>Welcome to Codeable Keep</h1>
      <form action="">
        <label htmlFor="">username</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="some-user"
          onChange={change}
        />
        <button onClick={handleNavigation}>Enter </button>
      </form>
    </div>
  );
}

export default Welcome;
