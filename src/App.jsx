import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<div>404 Not Found</div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App