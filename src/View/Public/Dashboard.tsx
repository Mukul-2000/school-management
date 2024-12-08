// import { Container } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import StudentList from "../../Components/dashboard/StudentList";
import TeacherList from "../../Components/dashboard/TeacherList";


export default function Dashboard(){
    return (
        <>
            <Container >
                <Row className="w-100">
                    <Col md={6}>
                        <StudentList />
                    </Col>
                    <Col md={6}>
                        <TeacherList />
                    </Col>
                </Row>    
            </Container>   
        </>
    )
}