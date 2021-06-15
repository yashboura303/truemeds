import './App.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Routes from './routes';
import { Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

function App() {
    const error = useSelector(state => state.main.error);
    useEffect(() => {
        if (error) {
            toast.error('Something went wrong');
        }
    }, [error]);
    return (
        <Container className="">
            <ToastContainer />
            <Routes />
        </Container>
    );
}

export default App;
