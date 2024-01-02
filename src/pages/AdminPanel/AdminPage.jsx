import React from 'react'

import AdminLayout from '../../components/layout/AdminLayout'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoutes from './AdminRoutes'
import Dashboard from '../../components/AdminPanelPages/Dashboard/Dashboard'



function AdminPage() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        }
      />

      <Route
        path="/General-Settings/*"
        element={
          <AdminLayout>
            <AdminRoutes/>
          </AdminLayout>
        }
      />

      
      <Route
        path="/Dashboard"
        element={
          <AdminLayout>
            <h1>Dashboard</h1>
          </AdminLayout>
        }
      />
      <Route
        path="/Landing-Page"
        element={

          <AdminLayout>
            <h1>Landing Page</h1>
          </AdminLayout>
        }
      />
      <Route
        path="/Categories"
        element={
          <AdminLayout>
            <h1>Categories</h1>
          </AdminLayout>
        }
      />
      <Route
        path="/Causes"
        element={
          <AdminLayout>
            <h1>Causes</h1>
          </AdminLayout>
        }
      />
      <Route
        path="/Causes-Edit-Approval"
        element={
          <AdminLayout>
            <h1>Causes Edit Approval</h1>
          </AdminLayout>
        }
      />
      <Route
        path="/Scholarship-Cause"
        element={
          <AdminLayout>
            <h1>Scholarship Cause</h1>
          </AdminLayout>
        }
      />
      <Route
        path="/Reported-Cause"
        element={
          <AdminLayout>
            <h1>Reported-Cause</h1>
          </AdminLayout>
        }
      />
      <Route
        path="/Withdrawals"
        element={
          <AdminLayout>
            <h1>Withdrawals</h1>
          </AdminLayout>
        }
      />
      <Route
        path="Cause-KYC"
        element={
          <AdminLayout>
            <h1>Cause-KYC</h1>
          </AdminLayout>
        }
      />
      <Route
        path="/Donations"
        element={
          <AdminLayout>
            <h1>Donations</h1>
          </AdminLayout>
        }
      />
      <Route
        path="Users"
        element={
          <AdminLayout>
            <h1>Users</h1>
          </AdminLayout>
        }
      />
      <Route
        path="Scholarships"
        element={
          <AdminLayout>
            <h1>Scholarships</h1>
          </AdminLayout>
        }
      />
      <Route
        path="Pages"
        element={
          <AdminLayout>
            <h1>Pages</h1>
          </AdminLayout>
        }
      />

      <Route
        path="PG-Settings"
        element={
          <AdminLayout>
            <h1>PG-Settings</h1>
          </AdminLayout>
        }
      />
    </Routes>
  )
}

export default AdminPage
