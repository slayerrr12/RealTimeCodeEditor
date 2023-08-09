
import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'


//pages imports
import Editor from './pages/Editor';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';

function App() {
  return (


    <>

      <div>
        <Toaster

          toastOptions={
            {
              success: {
                theme: {
                  primary: '#10b981',
                }
              }
            }
          }
          position="top-center"
          reverseOrder={false}
        />
      </div>





      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/editor/:roomId' element={<Editor />}></Route>




        </Routes>


      </BrowserRouter>

    </>


  );
}

export default App;
