import Register from './components/pages/Register.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/pages/Home.jsx'
import Social from './components/pages/Social.jsx'
import Map from './components/Map.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const App = () => {

  return (
      // <BrowserRouter>
      //   <div>
      //     <Link to="/">Home</Link>
      //     <Link to="/Social">Social</Link>
      //   </div>
      //   <Routes>
      //     <Route exact path='/' element={<Home />} />
      //     <Route exact path='/social' element={<Social />} />
      //     <Route exact path='/register' element={<Register />} />
      //   </Routes>
      // </BrowserRouter>
      <Map />
  );
}

export default App;
