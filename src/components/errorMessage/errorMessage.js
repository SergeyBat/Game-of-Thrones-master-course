import React from 'react';
import './errorMessage.css'
import img from './error.jpg'

const ErrorMessage = ()=>{
    return (
        <>
            <img src={img} alt='error'></img>    {/*Испорт из папки public process.env.PUBLIC_URL + '/img/error.jpg' */}
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;
