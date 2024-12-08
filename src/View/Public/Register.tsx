// import { Container } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import StudentRegister from "../../Components/register/StudentRegister";
import TeacherRegister from "../../Components/register/TeacherRegister";


export default function Register(){
    return (
        <>
            <Container >
                <Row className="w-100">
                    <Col md={6}>
                        <StudentRegister />
                    </Col>
                    <Col md={6}>
                        <TeacherRegister />
                    </Col>
                </Row>    
            </Container>   
        </>
    )
}