import Producto from "./Producto";

const Productos = ({ agregarAlCarro, productos }) => {
  return (
    <div>
      {
        productos.map(producto => {
          return <Producto
            name={producto.name}
            agregarAlCarro={agregarAlCarro}
            key={producto.name}
            producto={producto}
          />
        }
        )
      }
    </div>
  );
};

export default Productos;