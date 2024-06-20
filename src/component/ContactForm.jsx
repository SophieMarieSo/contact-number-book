import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function ContactForm() {
    const [contact, setContact] = useState({ name: '', phoneNumber: '' });
    const dispatch = useDispatch();
    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                dispatch({
                    type: 'ADD_CONTACT',
                    payload: {
                        name: contact.name,
                        phoneNumber: contact.phoneNumber,
                    },
                });
            }}
        >
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Label>이름</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='이름을 입력해주세요'
                    onChange={(e) => {
                        setContact({ ...contact, name: e.target.value });
                        console.log(contact);
                    }}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formPhoneNum'>
                <Form.Label>전화번호</Form.Label>
                <Form.Control
                    type='number'
                    placeholder='전화번호를 입력해주세요'
                    onChange={(e) => {
                        setContact({ ...contact, phoneNumber: e.target.value });
                        console.log(contact);
                    }}
                />
            </Form.Group>
            <Button variant='primary' type='submit'>
                추가하기
            </Button>
        </Form>
    );
}
