import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useGetCategories } from "../hooks/useProducts";

export const CreateProduct = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [thumbnail, setThumbnail] = useState("");
    const [category, setCategory] = useState("");

    const { categories } = useGetCategories();

    const handleFieldReset = () => {
        setTitle("");
        setDescription("");
        setPrice(0);
        setThumbnail("");
        setCategory("");
    };

    const handleCreateProduct = () => {
        const data = {
            title,
            description,
            price,
            thumbnail,
            category
        };

        if (title === '' || description === "" || price === 0 || thumbnail === "" || category === "") {
            return alert('Hay un dato que es obligatorio');
        }

        const db = getFirestore();

        const productsCollection = collection(db, "products");
        addDoc(productsCollection, data).then(({ id }) => {
            alert('Producto creado con éxito, id', id);
            handleFieldReset();
        });
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "40vh",
        paddingTop: "10px",
    };

    const inputStyle = {
        margin: "0 10px",
        width: "200px",
    };

    return (
        <div style={containerStyle}>
            <div>
                <h2>Crear un nuevo producto</h2>
                <input
                    type="text"
                    placeholder="Titulo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="text"
                    placeholder="Descripcion"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="number"
                    placeholder="Precio"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="text"
                    placeholder="Imagen"
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                    style={inputStyle}
                />

                {/* Categoría */}
                <div style={{ margin: "10px 0" }}>
                    <label htmlFor="category">Categoría:</label>
                    <select
                        name="category" 
                        id="category" 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="" disabled>-- Selecciona una categoría --</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <button onClick={handleCreateProduct}>Crear producto</button>
            </div>
        </div>
    );
};
