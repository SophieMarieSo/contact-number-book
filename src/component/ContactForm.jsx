import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function ContactForm() {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Label>이름</Form.Label>
                <Form.Control type='text' placeholder='이름을 입력해주세요' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formContactNum'>
                <Form.Label>전화번호</Form.Label>
                <Form.Control
                    type='number'
                    placeholder='전화번호를 입력해주세요'
                />
            </Form.Group>
            <Button variant='primary' type='submit'>
                추가하기
            </Button>
        </Form>
    );
}
