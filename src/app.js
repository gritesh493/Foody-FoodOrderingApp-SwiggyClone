import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import{createBrowserRouter, RouterProvider} from "react-router-dom";
import { Layout } from "./components/Layout";
import About from "./components/About";
import Error from "./components/Error";
import { Body } from "./components/Body";
import RestaurantDetails from "./components/ReataurantDetails";
import { ShimmerUI } from "./components/ShimmerUI";

const Instamart=lazy(()=>import("./components/instamart")); //Lazy Loading done.    //--add <Suspence fallback={<Shimmer/>}>

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/',
                element:<Body key={"Body"}/>,
            },
            {
                path:'/restaurant/:id',
                element:<RestaurantDetails/>,
            },
            {
                path:'/instamart',
                element:<Suspense fallback={<ShimmerUI/>}><Instamart/></Suspense>
            }
        ]
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));


//! root.render(<Layout/>);  
//Now we will not render the element or component, instead we will render the routerProvider Component.
root.render(<RouterProvider router={appRouter}/>);