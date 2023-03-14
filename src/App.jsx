import './App.css'
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar/navbar';

function App() {
  const greeting = [
    `¡Bienvenido a Compra Gamer!`, <br />, <br />,
    `Aquí podra encontrar las ultimas novedades Gamers como pueden ser: (Teclados, Mouse, Auriculares, Monitores, Gabinetes, etc.)`, <br />, <br />, 
    `¡Muchas Gracias por visitarnos, esperamos que vuelva pronto!`
  ]
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={greeting}/>
    </>
  );
}
    

export default App
