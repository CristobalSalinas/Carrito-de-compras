const styles = {
    navbar:{
        display:'flex',
        flexDirection:'row',
        alingItems:'center',
        heigth:'100px',
        justifyContent:'space-between',
        position:'relative',
        padding:'0 50px',
        boxShadow:'0 2px 3px rgb(0,0,0,0.1)'
    }
};

const Navbar = () =>{
    return (
        <nav style={styles.navbar}>
            <p>Logo</p>
            <p>Carro</p>
        </nav>
    );
};

export default Navbar;