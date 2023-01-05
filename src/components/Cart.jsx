import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action/ProductAction';
import { delCart } from '../redux/action/ProductAction';

function Cart() {
    const state1 = useSelector((state) => state.handleCart)
   

    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delCart(item));
    }

    const addProduct = (product) =>  {
        dispatch(addCart(product))
    }
    const delProduct = (product) =>  {
        dispatch(delCart(product))
    }

    const CartItems = (cartItem) => {
        return (
            <div className='px-4 my-3 bg-light rounded- 3'>
                <div className='container py-3'>
                    <button onClick={() => handleClose(cartItem)} className='btn-close float-end' aria-label="Close"></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={cartItem.image} alt={cartItem.title}
                                height="200px" width="180px" />
                        </div>
                        <div className='col-md-4'>
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw'>
                                {cartItem.qty} X  ${cartItem.price}
                                <h3>${cartItem.qty * cartItem.price}</h3>
                            </p>
                            <button className='btn btn-outline-dark me-4' onClick={() => delProduct(cartItem)}>-
                                <i className='fa fa-minus'></i></button>
                            {cartItem.qty}
                            <button className='btn btn-outline-dark me-4'  onClick={() => addProduct(cartItem)}>+
                                <i className='fa fa-plus'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const emptyCart = () => {
        return (
            <div className='px-4 my -5 bg-light rounded- 3'>
                <div className='container py-4'>
                    <div className='row'>
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>

        );
    }

    const button = () => {
        return (
            <div className='container'>
                <div className='row'>
                    <NavLink to="/home" className='btn btn-outline-dark mb-5 w-25'>Proceed To Checkout</NavLink>
                </div>
            </div>
        );

    }

    return (
        <>
            {state1.length === 0 && emptyCart()}
            {state1.length !== 0 && state1.map(CartItems)}
            {state1.length !== 0 && button()}
        </>
    )
}

export default Cart;