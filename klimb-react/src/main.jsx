import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ManageUser from './pages/ManageUser.jsx';
import UserForm from './forms/UserForm.jsx';
import EditForm from './forms/EditForm.jsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<ManageUser/>
  },
{  path:"/create",
  element:<UserForm/>
},
{
  path:"/edit/:id",
  element:<EditForm/>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
