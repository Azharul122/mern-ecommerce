import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLaout = () => {
  return (
    <div>
        <header>
            admin header
        </header>
        <Outlet/>
        <footer>
            admin footer
        </footer>
    </div>
  )
}

export default AdminLaout