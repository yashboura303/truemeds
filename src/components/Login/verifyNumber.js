import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { verifyOTP } from '../../redux/actions/mainAction';
import { toast } from 'react-toastify';

export default function VerifyNumber() {
    const dispatch = useDispatch();
    const history = useHistory();
    const mobileNo = useSelector(state => state.main.mobileNo);

    const [otp, setOTP] = useState();
    const onSubmit = e => {
        e.preventDefault();
        if (otp.length !== 4) {
            toast.error('Invalid otp');
        } else {
            dispatch(verifyOTP(mobileNo, otp)).then(result => {
                history.push('/');
            });
        }
    };
    return (
        <Card style={{ width: '18rem', 'margin-top': '100px' }} className="text-center mx-auto ">
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label column>Enter OTP</Form.Label>
                        <Form.Control
                            type="number"
                            value={otp}
                            onChange={e => {
                                setOTP(e.target.value);
                            }}
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
