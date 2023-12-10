import { createBrowserRouter} from 'react-router-dom'

import { Home } from './pages/home/Home'
import { Admin } from './pages/admin/Admin'
import { Login } from './pages/login/Login'
import { Networks } from './pages/networks/Networks'
import {ErrorPage} from './pages/error/ErrorPage'

import { Private } from './routes/Private' 


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/admin',
    element:<Private><Admin /></Private>
  },
  {
    path: '/admin/social',
  element: <Private><Networks /></Private>
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
])
export {router}