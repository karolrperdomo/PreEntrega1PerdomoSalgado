import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemListContainer = ({ greeting, productsData }) => {
    console.log(productsData);

    
    return (
        <div
            style={{
                display: "flex",
                justifyContent: productsData ? "space-around" : "center",
                padding: "20px",
                width: "100vw",
                flexWrap: "wrap",
            }}
        >
            {productsData ? (
                productsData.map((product) => (
                    <Card key={product.id} style={{ width: "18rem", margin: "10px 0" }}>
                        <Card.Img
                            variant="top"
                            src={product.thumbnail}
                            style={{
                                maxHeight: "200px",
                                objectFit: "cover",
                                borderRadius: "8px",
                            }}
                        />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <div>{product.price}</div>
                            <div style={{ textAlign: "center" }}>
                                <Button
                                    variant="primary"
                                    style={{ backgroundColor: "#32c5b8" }}
                                >
                                    Conoce más
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <div
                    style={{
                        fontFamily: "cursive",
                        fontWeight: "bold",
                        fontSize: "24px",
                        width: "100vw",
                        height: "50vh",
                        textAlign: "center",
                        padding: "25px",
                        background: "#F5F5F5",
                        borderRadius: "15px",
                    }}
                >
                    {greeting}
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;
