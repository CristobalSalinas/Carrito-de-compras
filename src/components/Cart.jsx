import BubbleAlert from './BubbleAlert';

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

const Cart = () =>{
    return (
        <div>
            <span style={styles.bubble}>
                <BubbleAlert/>
            </span>
            <button style={styles.cart}>Carro</button>
        </div>
    );
};

export default Cart;