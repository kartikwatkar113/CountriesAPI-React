import { createBrowserRouter,RouterProvider } from 'react-router'
import {createRoot} from 'react-dom/client';
import App from './App'
import { Home } from './components/Home';
import Error from './components/Error';
import CountryDetail from './components/CountryDetail';


const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/:country',
                element:<CountryDetail/>
            },
            {
                path:'/help',
                element:<div>hellow world22222</div>
            }
            ,{
                path:'/help',
                element:<div>hellow world22222</div>
            }
        ]
    },
   
])
const root = createRoot(document.getElementById('root'))
//root.render(<App/>)
root.render(<RouterProvider router={router}/>)