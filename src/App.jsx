import Productos from "./components/Productos";
import Layout from './components/Layout';
import Title from "./components/Title";
import Navbar from "./components/Navbar";

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

  const agregarAlCarro = (producto) =>{
    console.log('agregarAlCarro',producto);
  };

  return (
    <>
      <Navbar />
      <Layout>
        <Title />
        <Productos 
          agregarAlCarro={agregarAlCarro}
          productos={productos}
          />
      </Layout>
    </>
  )
}

export default App
