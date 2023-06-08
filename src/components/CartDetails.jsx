const styles = {
    cartDetails:{
        backgroundColor:'#fff',
        position:'absolute',
        marginTop:10,
        boxShadow:'1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius:'5px',
        width:'300px',
        right:50
    },
    ul:{
        margin:0,
        padding:0
    },
    producto:{
        listStyleType:'none',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'25px 20px',
        borderBottom:'solid 1px #aaa',
    }
};

const CartDetails = ({carro}) =>{
    return (
        <div style={styles.cartDetails}>
            <ul style={styles.ul}>
                {
                    carro.map(c=>
                        <li key={c.name} style={styles.producto}>
                            <img src={c.img} alt={c.name} width='50' height='32'/>
                            {c.name} <span>{c.quantity}</span>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default CartDetails;