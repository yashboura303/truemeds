import React, { useRef, useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/actions/mainAction';
import Article from './article';

const Index = () => {
    const dispatch = useDispatch();
    let userToken = useSelector(state => state.main.userToken);
    const articles = useSelector(state => state.main.articles);
    function useForceUpdate() {
        const [value, setValue] = useState(0); // integer state
        return () => setValue(value => value + 1); // update the state to force render
    }
    const Completionist = () => <span>You are good to go!</span>;
    const clockRef = useRef();
    const forceUpdate = useForceUpdate();
    const handleStart = () => clockRef.current.start();
    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <span>
                    {hours}:{minutes}:{seconds}
                </span>
            );
        }
    };

    const onComplete = () => {
        dispatch(getPosts(userToken));
    };
    return (
        <div>
            <button
                onClick={() => {
                    forceUpdate();
                    handleStart();
                }}
            >
                On Click
            </button>
            <Countdown date={Date.now() + 3000} onComplete={onComplete} renderer={renderer} ref={clockRef} />
            <Article articles={articles} />
        </div>
    );
};

export default Index;
