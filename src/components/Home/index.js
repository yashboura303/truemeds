import React, { useRef, useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getPosts, logout } from '../../redux/actions/mainAction';
import Article from './article';
import { Row, Button, Container, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
const Index = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [toggleButton, settoggleButton] = useState(false);
    let userToken = useSelector(state => state.main.userToken);
    const articles = useSelector(state => state.main.articles);
    function useForceUpdate() {
        const [value, setValue] = useState(0);
        return () => setValue(value => value + 1);
    }
    useEffect(() => {
        if (localStorage.getItem('user') === '') {
            history.push('/login');
        }
    }, []);
    const clockRef = useRef();
    const forceUpdate = useForceUpdate();
    const handleStart = () => clockRef.current.start();
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (!completed) {
            return (
                <h1 className="text-center">
                    Fetching posts in {minutes}m:{seconds}s
                </h1>
            );
        } else {
            return <></>;
        }
    };

    const onComplete = () => {
        toast.success('Fetching posts!');
        settoggleButton(!toggleButton);
        if (userToken) dispatch(getPosts(userToken));
        else {
            if (localStorage.getItem('user')) dispatch(getPosts(localStorage.getItem('user')));
        }
    };
    return (
        <Container className="text-center">
            {toggleButton && (
                <Button
                    onClick={() => {
                        forceUpdate();
                        handleStart();
                        settoggleButton(!toggleButton);
                    }}
                    className="my-2 text-center"
                >
                    Reset Timer
                </Button>
            )}
            <Countdown date={Date.now() + 60000} onComplete={onComplete} renderer={renderer} ref={clockRef} />
            <Row>
                {!articles ? (
                    <Spinner animation="grow" className="text-center mx-auto my-4" />
                ) : (
                    <Article articles={articles} />
                )}
            </Row>
        </Container>
    );
};

export default Index;
