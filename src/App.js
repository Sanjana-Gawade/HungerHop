import React, { useContext } from "react";
import ReactDOM from 'react-dom/client'
import Header from "./Components/Header";
import Body from "./Components/Body";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import { MyProvider } from "../utils/ContextProvider";
import MyContext from "../utils/MyContext";
import { Provider } from "react-redux";
import {store} from "../utils/store";
import CartPage from "./Components/Cart";


const AppLayout = function(){

    return(
        <Provider store={store}>
          <MyProvider >
            <div>
                  <Header/>
                  <Outlet/> 
            </div>
              
          </MyProvider>
            
          </Provider>
    )
    
}
const appRouter= createBrowserRouter([
    {
      path:"/",
      element: <AppLayout/>,
      children:[
        {
          path:"/",
          element: <Body/>
        },
        {
          path:"/aboutus",
          element: <AboutUs/>
        },
        {
          path: "/contactus",
          element:<ContactUs/>
        },
       {path: "/cartpage",
          element:<CartPage/>
        },
        {
          path: "/restaurants/:restId",
          element:<RestaurantMenu/>
        }
         
          
  
      ],
      errorElement: <Error/>
    },
   
  ])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)