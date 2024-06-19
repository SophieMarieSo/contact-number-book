import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

export default function SearchBox() {
    return (
        <Row>
            <Col lg={10}>
                <Form.Control type='text' placeholder='이름을 입력해주세요' />
            </Col>
            <Col lg={2}>
                <Button variant='primary' type='submit'>
                    찾기
                </Button>
            </Col>
        </Row>
    );
}
