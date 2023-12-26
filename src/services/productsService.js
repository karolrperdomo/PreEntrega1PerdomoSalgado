import axios from 'axios';


export async function getProducts(limit = 5) {
    console.log(limit)
    return await axios.get(`https://dummyjson.com/products?limit=${limit}`)
} 