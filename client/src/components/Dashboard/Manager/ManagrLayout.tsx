import React from 'react'
import { Outlet } from 'react-router-dom'

const ManagrLayout = () => {
  return (
    <div>
      <header>
            Manager header
        </header>
        <Outlet/>
        <footer>
            Manager footer
        </footer>
    </div>
  )
}

export default ManagrLayout