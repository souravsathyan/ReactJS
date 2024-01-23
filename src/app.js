import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/HeaderComponent'
import BodyComponent from './components/BodyComponent'
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import AboutComponent from './components/AboutComponent'
import ContactComponent from './components/ContactComponent'
import ErrorComponent from './components/ErrorComponent'
import RestMenuComponent from './components/RestMenuComponent'


const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<BodyComponent/>
            },
            {
                path:"/about",
                element:<AboutComponent/>
            },
            {
                path:'/contact',
                element:<ContactComponent/>
            },
            {
                path:'/restaurants/:resId',
                element:<RestMenuComponent/>
            }
        ],
        errorElement:<ErrorComponent/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)