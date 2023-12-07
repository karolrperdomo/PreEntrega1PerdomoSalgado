import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div style={{
            fontFamily: "cursive",
            fontWeight: "bold",
            fontSize: 24,
            width: "100vw",
            height: "50vh",
            textAlign: "center",
            padding: 25,
            background: "#F5F5F5",
            borderRadius: "15px"
        }}>
            {greeting}
        </div>
    );
}

export default ItemListContainer;
