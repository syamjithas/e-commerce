import "./login.css"
import { useNavigate} from "react-router-dom";

function Login() {
    let navigate = useNavigate();
    return (
      <div>
        Login page
        <button onClick={()=>navigate("/landing")}>Login</button>
      </div>
    );
  }
  
export default Login;
  