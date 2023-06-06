const styles = {
    bubble:{
        backgroundColor:'#E9725A',
        borderRadius:'15px',
        color:'#fff',
        padding:'2px 10px',
        fontSize:'0.9rem',
        width:'20px'
    }
};

const BubbleAlert = ({value}) =>{
    function getNumber(n){
        if(!n){
            return ''
        }
        return n > 9 ? '9+' : n; 
    }

    return (
        <span style={styles.bubble}>
            {getNumber(value)}
        </span>
    );
};

export default BubbleAlert;