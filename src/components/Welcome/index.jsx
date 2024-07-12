import './styles.module.css'
import { useNavigate } from "react-router-dom";



function Welcome() {

    const navigate = useNavigate();

  //Dirige a la página de gracias 
  const handleNavigation = () => {
    navigate('/dashboard');
  };
    return (
        <div>
            <h1>Welcome to Codeable Keep</h1>
            <form action="">
                <label htmlFor="">username</label>
                <input type="text" name="" id="" placeholder='some-user' />
                <button onClick={handleNavigation}>Enter </button>
            </form>
        </div>
    )
}

export default Welcome;