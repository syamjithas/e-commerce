import { useRoutes } from "react-router-dom";
import Login from "./pages/login/Login";
import Cart from "./pages/landing/pages/cart/Cart"
import Landing from "./pages/landing/Landing"
function App() {
  let element = useRoutes([
    {
      path: "/login",
      element: <Login/> ,
      
    },
    {
      path: "/landing",
      element: <Landing />,
      children: [
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    }]);

  return element;
}

export default App