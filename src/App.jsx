import './App.css'
import NavBar from './components/NavBar/NavBar';
import itemlistContainer from './components/itemlistContainer'

function App() {
  return (
    <>
      <nav>
      <NavBar msj="HOOLA" image="./assets/logo-imagen.png" carrito="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fes%2Fsearch%3Fq%3Dblanco%2B-%2Bcarrito&psig=AOvVaw1R0EsQknrXkYVg2Xvkf8xT&ust=1714095926738000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiPqIGf3IUDFQAAAAAdAAAAABAE" />
      <div>
        <itemlistContainer saludo= "Bienvenidos a mi intento de NavBar" />
      </div>
      </nav>
    </>
  )
}

export default App
