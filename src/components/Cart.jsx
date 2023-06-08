import BubbleAlert from './BubbleAlert';
import CartDetails from './CartDetails';

const styles = {
    cart:{
        backgroundColor:'#359A2C',
        color:'#fff',
        border:'none',
        padding:'15px',
        borderRadius:'15px',
        marginBottom:'10px',
        cursor:'pointer',
    },
    bubble:{
        position:'relative',
        left:'12px',
        top:'20px'
    }
};

const Cart = ({carro}) =>{

    const quantity = carro.reduce((total,c)=>total+c.quantity,0);

    return (
        <div>
            <span style={styles.bubble}>
                {quantity > 0 && <BubbleAlert value={quantity}/>}
            </span>
            <button style={styles.cart}>Carro</button>
            <CartDetails carro={carro}/>
        </div>
    );
};

export default Cart;