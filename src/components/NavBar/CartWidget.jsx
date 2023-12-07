import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidgett = () => {
    return (
        <div style={{
            display: "flex",
            width: "40px",
            height: "40px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFF", 
            borderRadius: "8px",    
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",  
            cursor: "pointer"
        }}>
            <FontAwesomeIcon style={{ color: "#000", fontSize: "20px" }} icon={faShoppingCart} /> 
            <span style={{ fontWeight: "bold", fontSize: "15px", color: "#000", marginLeft: "5px" }}>1</span> 
        </div>
    );
}

export default CartWidgett;
