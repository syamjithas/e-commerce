import { useNavigate,Outlet} from "react-router-dom";
import Navigation from "./pages/navigation/Navigation";

function Landing(){
    let navigate = useNavigate();
    return (<div>
       <Navigation/>
       <button onClick={()=>navigate("./cart")}>test</button>
       <div>I am Landing </div>
       <Outlet/>
    </div>);
}

export default Landing