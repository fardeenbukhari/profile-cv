import Contact from './Contact';
import Home from './Home';
import './App.css';
import './Home';
import Projects from './Projects';
import { Link,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
    </Routes>

   </>

  );
}


export default App;
