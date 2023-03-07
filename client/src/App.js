import logo from './logo.svg';
import './App.css';
import User from './components/landpage';
import Dash from './components/dashboard';
import Del from './components/delete';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update from './components/update';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<User/>}/>
      <Route path='/dashboard' element={<Dash/>}/>
      <Route path='/delete' element={<Del/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>


    
   
 
    </>
  );
}

export default App;
