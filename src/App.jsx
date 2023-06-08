import Productos from "./components/Productos";
import Layout from './components/Layout';
import Title from "./components/Title";
import Navbar from "./components/Navbar";

import { useState } from "react";

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
  const [carro,setCarro] = useState([]);
  const [visibleCart,setVisibleCart] = useState(false);

  const agregarAlCarro = (producto) =>{
    if(carro.find(x=>x.name === producto.name)){
      const new_carro = carro.map(x=>x.name === producto.name ? ({
        ...x,
        quantity:x.quantity + 1
      }):x);
      return setCarro(new_carro);
    }
    return setCarro(carro.concat({
      ...producto,
      quantity:1
    }))
  };

  const showCart = () =>{
    if(carro.length > 0){
      setVisibleCart(!visibleCart);
    }
  };

  return (
    <>
      <Navbar carro={carro} showCart={showCart} visibleCart={visibleCart}/>
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
