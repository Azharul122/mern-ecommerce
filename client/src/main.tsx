import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.tsx';
import { ThemeProvider } from './components/theme-provider.tsx';
import DashboardHome from './components/Dashboard/admin/DashboardHome.tsx';
import AdminLaout from './components/Dashboard/admin/AdminLaout.tsx';
import ManageProducts from './components/Dashboard/admin/ManageProducts.tsx';
import ManagrLayout from './components/Dashboard/Manager/ManagrLayout.tsx';
import ManagerHome from './components/Dashboard/Manager/ManagerHome.tsx';
import CreateProduct from './components/Dashboard/Manager/CreateProduct.tsx';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import { Toaster } from 'sonner';
import AuthLogin from './components/Home/auth/login.tsx';
import AuthRegister from './components/Home/auth/register.tsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
     
    ],
  },
  {
    path:"/login",
    element:<AuthLogin/>
  },
  {
    path:"/register",
    element:<AuthRegister/>
  },
  {
    path: "/dashboard",

    children: [

      {
        path: "admin",
        element: <AdminLaout />,
        children: [
          {
            index: true,
            element: <DashboardHome />
          }
          , {
            path: "manage",
            element: <ManageProducts />
          }
        ]
      },
      {
        path: "manager",
        element: <ManagrLayout />,
        children: [
          {
            index: true,
            element: <ManagerHome />
          }
          , {
            path: "manage",
            element: <CreateProduct />
          }
        ]
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster/>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
