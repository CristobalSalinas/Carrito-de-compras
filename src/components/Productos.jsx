import Producto from "./Producto";

const styles = {
  productos:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
};

const Productos = ({ agregarAlCarro, productos }) => {
  return (
    <div style={styles.productos}>
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