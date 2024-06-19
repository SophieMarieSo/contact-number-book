import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

function App() {
    return (
        <div>
            <h1 className='title'>연락처</h1>
            <Container>
                <Row>
                    {/* 연락처 등록 form */}
                    <Col>
                        <ContactForm />
                    </Col>
                    {/* 연락처 검색창, 등록리스트 */}
                    <Col>
                        <ContactList />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
