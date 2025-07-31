import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import Body from './components/Body'    
import Login from './components/Login'
import Browser from './components/Browser'
import appStore from "./utils/appStore";

const App = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browser",
            element: <Browser />
        }
    ])

    return (
        <Provider store={appStore}>
            <RouterProvider router={appRouter}>
                <Body />
            </RouterProvider>
        </Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)