import './App.css';
import ItemListContainer from './Components/Items/ItemListContainer';
import NavBar from './Components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';




function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />

        <Routes> 
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />}/>
         
        <Route path='/categoria/:idCategoria' element={<ItemListContainer />}/>


        <Route path='/item/:id' element={<ItemDetailContainer />}/>

 
       </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;