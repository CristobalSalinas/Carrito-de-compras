import Productos from "./components/Productos";

function App() {

  const productos = [
    {
      name:'Tomate',
      price:1500,
      img:'./src/assets/productos/tomate.jpg',
    },
    {
      name:'Arbejas',
      price:2000,
      img:'./src/assets/productos/arbejas.jpg',
    },
    {
      name:'lechuga',
      price:1500,
      img:'./src/assets/productos/lechuga.jpg',
    },
  ];

  return (
    <>
      <Productos 
        agregarAlCarro={()=>{}}
        productos={productos}
        />
    </>
  )
}

export default App
