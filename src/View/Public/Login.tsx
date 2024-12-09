// import { Container } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import StudentLogin from "../../Components/Login/StudentLogin";
import TeacherLogin from "../../Components/Login/TeacherLogin";


export default function Login() {
    return (
        <>
            <div style={{
                backgroundImage: `url("/school3.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>

                <Container className="d-flex justify-content-center " style={{ minHeight: '100vh', gap: "10px" }}>

                    <Row className="w-100">
                        {/* <Col md={6} >
                            <StudentLogin />
                        </Col> */}
                        <Col
                            md={6}
                            className="position-relative"
                            // style={{
                            //     backgroundImage: `url("/student.png")`,
                            //     backgroundSize: "cover",
                            //     backgroundPosition: "center",
                            //     backgroundRepeat: "no-repeat",
                            // }}
                        >
                            <StudentLogin />
                        </Col>

                        {/* <Col md={6}>
                            <TeacherLogin />
                        </Col> */}
                        <Col md={6}
                            className="position-relative"
                            // style={{
                            //     backgroundImage: `url("/teacher.png")`,
                            //     backgroundSize: "cover",
                            //     backgroundPosition: "center",
                            //     backgroundRepeat: "no-repeat",
                            // }}
                            >
                            <TeacherLogin />
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
}