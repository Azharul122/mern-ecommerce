
import { Outlet } from "react-router-dom"
import Header from "./components/Home/Header"


function App() {


  return (
    <>
      <div className="w-[90%] sm:w-[93%] md:w-[96%] min-h-screen max-w-7xl mx-auto">
        <header className="h-[5em] border-b-2">
          <Header/>
        </header>
        <Outlet />
        <footer >
          <p>Footer</p>
        </footer>
      </div>
    </>
  )
}

export default App
