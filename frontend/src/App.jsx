import { useState } from 'react'

import './App.css'
import Navvar from './components/shared/navvar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/login'
import Home from './components/home'
import Signup from './components/auth/signup'
import Jobs from './components/jobs'
import Browse from './components/browse'
import Profile from './components/profile'
import JobDescription from './components/jobDescription'
import Companies from './components/admin/companies'
import CompanyCreate from './components/admin/companyCreate'
import CompanySetup from './components/admin/companySetup'
import AdminJobs from './components/admin/adminJobs'
import PostJob from './components/admin/postJob'
import Applicants from './components/admin/applicants'
import ProtectedRoute from './components/admin/protectedRoute'

 
function App() {

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },

    {
      path:'/login',
      element:<Login/>
    },

    {
      path:'/signup',
      element:<Signup/>
    },

    {
      path:'/jobs',
      element:<Jobs/>
    },

    {
      path: "/description/:id",
      element: <JobDescription />
    },

    
    {
      path:'/browse',
      element:<Browse/>
    },

    {
      path:'/profile',
      element:<Profile/>
    },

    // admin ke liye yha se start hoga

    {
      path:'/admin/companies',
      element:<ProtectedRoute><Companies/></ProtectedRoute>
    },

    {
      path:'/admin/companies/create',
      element: <ProtectedRoute><CompanyCreate/></ProtectedRoute>
    },

    {
      path:'/admin/companies/:id',
      element: <ProtectedRoute><CompanySetup/></ProtectedRoute>
    },

    {
      path:'/admin/jobs/',
      element: <ProtectedRoute><AdminJobs/></ProtectedRoute>
    },

    {
      path:'/admin/jobs/create',
      element:<ProtectedRoute><PostJob/></ProtectedRoute>
    },

    {
      path:'/admin/jobs/:id/applicants',
      element:<ProtectedRoute><Applicants/></ProtectedRoute>
    },



  ])


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
