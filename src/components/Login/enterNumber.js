import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Card, Button } from 'react-bootstrap';
import { sendOTP } from '../../redux/actions/mainAction';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function EnterNumber() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [number, setNumber] = useState();
    const onSubmit = e => {
        e.preventDefault();
        if (number.length !== 10 || number[0] < 6) {
            toast.error('Invalid number');
        } else {
            dispatch(sendOTP(number));
            history.push('/verify');
        }
    };
    useEffect(() => {
        if (localStorage.getItem('user') !== '') {
            history.push('/home');
        }
    }, []);
    return (
        <Card style={{ width: '18rem', 'margin-top': '100px' }} className="text-center mx-auto">
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label column>Enter Mobile No to get OTP</Form.Label>
                        <Form.Control
                            type="number"
                            value={number}
                            onChange={e => {
                                setNumber(e.target.value);
                            }}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}
