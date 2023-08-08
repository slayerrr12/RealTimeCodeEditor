
import './App.css';
import {BrowserRouter , Routes , Route, Router} from 'react-router-dom' 


//pages imports
import  Editor  from './pages/Editor';
import  Home  from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/editor/:roomId' element={<Editor/>}></Route>


      

      </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
