import { useEffect, useState } from "react";
import API from "../services/api";

import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

export default function Products(){

const [products,setProducts] = useState([]);
const [editProduct,setEditProduct] = useState(null);

const getProducts = async()=>{

const res = await API.get("/products");

setProducts(res.data);

};

useEffect(()=>{

getProducts();

},[]);

const clearEdit = ()=>{
setEditProduct(null);
};

return(

<div>

<h2>Products</h2>

<ProductForm
refresh={getProducts}
editProduct={editProduct}
clearEdit={clearEdit}
/>

<ProductTable
products={products}
refresh={getProducts}
setEditProduct={setEditProduct}
/>

</div>

);
}