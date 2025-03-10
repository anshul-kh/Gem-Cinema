import {Watch} from '@containers/index';
import { Home } from './containers';
import './App.css';
import {Navbar } from '@components/index'
import { Route,Routes, BrowserRouter as Router } from 'react-router-dom';





function App() {

  return (
    <Router>
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<Watch/>}/>
      </Routes>
      </>
    </Router>
  )
}

export default App
