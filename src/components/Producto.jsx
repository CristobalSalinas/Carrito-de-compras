import ButtonProduct from "./ButtonProduct";

const styles = {
  producto:{
    border:'solid 1px #eee',
    boxShadow:'0 5px 5px rgb(0,0,0,0.1)',
    width:'30%',
    padding:'10px 15px',
    borderRadius:'5px'
  },
  img:{
    width:'100%'
  }
}

const Producto = ({name,agregarAlCarro,producto}) =>{
  return (
    <div style={styles.producto}>
      <img 
        style={styles.img}
        src={producto.img} 
        alt={name} 
      />
      <h3>{producto.name}</h3>
      <p>{producto.price}</p>
      <ButtonProduct onClick={()=>{agregarAlCarro(producto)}}>Agregar al carro</ButtonProduct>
    </div>
  );
};

export default Producto;