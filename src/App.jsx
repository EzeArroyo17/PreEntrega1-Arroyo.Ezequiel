import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import "./App.css"

function App() {
  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path="/category/:idCategory" element={<ItemListContainer/>} />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />

      </Routes>


    </BrowserRouter>
  )
}

export default App
