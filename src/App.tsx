import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Success from "./pages/Success/Success";
import Header from "./components/Header/Header";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import { productsData } from "./api/Api";
import Product from "./components/Product/Product";


import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:productsData,
      },
      {
        path:'/product/:id',
        element:<Product/>,
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/success',
        element:<Success/>
      },
    ]
  }
])

function App() {


  return (
    <div className="font-poppins">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
