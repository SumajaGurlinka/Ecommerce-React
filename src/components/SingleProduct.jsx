import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { addCart} from '../redux/action/ProductAction';
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom"

function SingleProduct() {

    const {id} = useParams();
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(false);


    useEffect(() => {
        const getProduct = async () =>{
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[]);

    const Loading = () => {
        return (
          <>
            Loading....please wait!
          </>
        )
    };

    const dispatch = useDispatch();

    const addProduct = (product) =>  {
        dispatch(addCart(product))
    }

    const ShowProduct = () => {
        return (
          <>
            <div className='col-md-6'>
                <img src = {product.image} alt = "{product.title}" height = "400px" width = "400px" />
            </div>
            <div className='col-md-6'>
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'>
                    Rating {product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
                <h3 className='display-6 fw-bold my-4'>
                    $ {product.price}
                </h3>
                <p className='lead'>{product.description}</p>
                <button onClick = {() => addProduct(product)} className='btn btn-outline-dark my-5'>
                Add to Cart</button>
                <NavLink to = "/cart" className="btn btn-outline-dark ms-1">
                Go to Cart
                </NavLink>
            </div>
          </>
        );
      };


    return (
        <div>
            <div className='container py-5'>
                <div className='row py-4'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default SingleProduct