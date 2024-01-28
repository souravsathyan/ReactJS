import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/HeaderComponent'
import BodyComponent from './components/BodyComponent'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
// import AboutComponent from './components/AboutComponent'
import ContactComponent from './components/ContactComponent'
import ErrorComponent from './components/ErrorComponent'
import RestMenuComponent from './components/RestMenuComponent'
import Login from './components/login'
import Footer from './components/footer'
// import Grocery from './components/Grocery'

const Grocery = lazy(()=>import('./components/Grocery'))
const About = lazy(()=>import('./components/AboutComponent'))

const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <div className='container'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <BodyComponent />
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>About Component</h1>}>
                        <About/>
                    </Suspense>
                )
                
            },
            {
                path: '/contact',
                element: <ContactComponent />
            },
            {
                path: '/restaurants/:resId',
                element: <RestMenuComponent />
            },
            {
                path: '/grocery',
                element: (
                    <Suspense fallback={<h1>Loading....</h1>}>
                      <Grocery />
                    </Suspense>
                  ),
            }
        ],
        errorElement: <ErrorComponent />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)