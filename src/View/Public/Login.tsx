// import { Container } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import StudentLogin from "../../Components/Login/StudentLogin";
import TeacherLogin from "../../Components/Login/TeacherLogin";


export default function Login(){
    return (
        <>
            <Container >
                <Row className="w-100">
                    <Col md={6}>
                        <StudentLogin />
                    </Col>
                    <Col md={6}>
                        <TeacherLogin />
                    </Col>
                </Row>    
            </Container>   
        </>
    )
}