import React, { Suspense, lazy, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Contact from './components/Contact'
import Error from './components/Error'
import RestMenu from './components/RestMenu'
import Login from './components/login'
import Footer from './components/footer'
import userContext from './utils/userContext'
import useLocalStorage from './utils/useLocalStorage'
import { Provider } from "react-redux"
import appStore from './utils/appStore'

const Grocery = lazy(() => import('./components/Grocery'))
const About = lazy(() => import('./components/About'))
const Cart = lazy(()=>import('./components/Cart'))

const AppLayout = () => {
    const { userName } = JSON.parse(localStorage.getItem("user")) || ""
    const [getUserName, setUserName] = useState(userName || "")

    return (
        <Provider store={appStore}>
            <userContext.Provider value={{ loggedInUser: getUserName, setUserName }}>
                <div className="app ">
                    <Header />
                    <div className=''>
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </userContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>About Component</h1>}>
                        <About />
                    </Suspense>
                )

            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <RestMenu />
            },
            {
                path: '/grocery',
                element: (
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path:'/cart',
                element:(
                    <Suspense fallback={<h1>Cart Loading...</h1>}>
                        <Cart/>
                    </Suspense>
                )
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)