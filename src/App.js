import './css/index.css'
import {Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import MainPage from './components/MainPage';
import ReadNote from './components/readNote';
function App() {
  return (
      <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/main-page' element={<MainPage />} />
        <Route exact path='/note/:id' element={<ReadNote />} />



        {/* <Route exact path='/createNote' element={} />
        <Route exact path='/viewAllNotes' element={} />
        <Route exact path='/viewNote/:id' element={} /> */}
      </Routes> 
     </>

  );
}

export default App;
