import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function SearchBox() {
    const [keyword, setKeyword] = useState('');
    let dispatch = useDispatch();
    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                dispatch({ type: 'SEARCH_BY_USERNAME', payload: { keyword } });
                setKeyword('');
            }}
        >
            <Row>
                <Col lg={9}>
                    <Form.Control
                        type='text'
                        placeholder='이름을 입력해주세요'
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </Col>
                <Col lg={3}>
                    <Button variant='primary' type='submit'>
                        찾기
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}
