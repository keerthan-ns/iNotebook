import { BrowserRouter as Router,  Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import NoteState from "./context/notes/NoteState"
import Alert from "./components/Alert"

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar/> 
          <div className='container mt-24 mb-3 mx-auto content-center'>
            <Alert type="Success !" message="Added new note"/>
            <Routes> 
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/about' element={<About/>}/>
            </Routes> 
          </div>
        </Router>
      </NoteState>
    </>
  )
}

export default App
