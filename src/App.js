import { Routes,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Nav from './Components/Nav';
import Feed from './Components/Feed';
import Login from './Components/Login' 

function App() {
  return (
    <div >
     <Nav/>
     <Routes>
      <Route path='/' element={<Feed/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
