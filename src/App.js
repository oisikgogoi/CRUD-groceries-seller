import './css/index.css'
import Home from './components/home';
import {Routes,Route} from 'react-router-dom'
import Addproduct from './addProduct/addproduct';
import EditProduct from './EditProduct/editProduct';
function App() {
  return (
      <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/add-product' element={<Addproduct />} />
        <Route exact path='/edit-product/:id' element={<EditProduct />} />
      </Routes> 
     </>

  );
}

export default App;
