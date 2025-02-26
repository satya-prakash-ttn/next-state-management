"use client";
import React, { useReducer, useEffect } from 'react';
import { productReducer } from './productReducer';
import ProductTable from '../components/ProductTable'
import ProductForm from '../components/ProductForm';
import { useLoader } from "../context/LoaderContext";
import Loader from "../components/Loader";


const API_URL = "https://dummyjson.com/products";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const ProductsPage = () => {
    const [state, dispatch] = useReducer(productReducer, initialState);
    const { loadingContext, setLoadingContext } = useLoader();
    useEffect(() => {

        const fetchProducts = async () => {
            setLoadingContext(true);

            dispatch({ type: "LOADING" });

            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                dispatch({ type: "SET_PRODUCTS", payload: data.products.slice(0, 10) });
                setLoadingContext(false);
            }
            catch (error) {
                dispatch({ type: "ERROR", payload: error.message });
            }

        }

        fetchProducts();

    }, [])


    return (
        <div className='container'>
            <h1 className="text-2xl font-bold">Products</h1>
            <ProductForm dispatch={dispatch} products={state.products} />
            {loadingContext && <Loader />}
            <ProductTable products={state.products} dispatch={dispatch} />
        </div>
    );
}

export default ProductsPage;
