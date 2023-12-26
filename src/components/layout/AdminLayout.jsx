import React from 'react'
import AdminNavbar from './AdminNavbar'
import { SideBar } from './sideBar'

const  AdminLayout = ({children}) => {
  return (
    <>
    <AdminNavbar />
    <SideBar></SideBar>
    <div className='main-container'>
      {children}
    </div>
    </>
  )
}

export default AdminLayout
