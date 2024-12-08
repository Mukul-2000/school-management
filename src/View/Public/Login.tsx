// import { Container } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import StudentLogin from "../../Components/Login/StudentLogin";
import TeacherLogin from "../../Components/Login/TeacherLogin";


export default function Login(){
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh'}}>

                <Row className="w-100">
                {/* <h3><b>School Management</b></h3> */}
                    <Col md={6} >
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