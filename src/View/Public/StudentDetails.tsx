// import { Container } from "@mui/material";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { studentsListData } from "../../assets/students";
import { BsPersonBadgeFill } from "react-icons/bs";



export default function StudentDetails(){
    const {id} = useParams();
    const navigate = useNavigate();

    const studentData: any = studentsListData.find((stu: any) => String(stu.id) === String(id));


    return (
        <>
        <div style={{
                backgroundImage: `url("/school3.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh"
            }}>
            <Container className="py-4">
                <div className="d-flex justify-content-between align-items-center">

                    <h4 className="mb-4">Student Details<span>  <BsPersonBadgeFill /></span></h4> 
                    <Button className="btn-primary mb-3" onClick={() => navigate(-1)}>Back</Button>
                </div>
                   <Card className="w-100 shadow" style={{backgroundColor: "rgba(255, 255, 255, 0.2)"}}>
                        <Card.Img
                            variant="top"
                            src={"https://picsum.photos/300"}
                            alt={`${studentData?.name} profile`}
                            style={{ height: '300px', objectFit: 'cover' }}
                        />
                        <Card.Body className="d-flex flex-column">
                            <div className="d-flex justify-content-between align-items-center">
                                <Card.Title>{studentData?.name}</Card.Title>
                            </div>
                            <Card.Text>
                                <b>Email:</b> {studentData?.email} <br />
                                <b>School:</b> {studentData?.school} <br />
                                <b>Roll No.:</b> {studentData?.rollNo} <br />
                                <b>Gender:</b> {studentData?.gender} <br />
                                <b>DOB:</b> {studentData?.dob} <br />
                                <b>Class:</b> {studentData?.class}
                            </Card.Text>
                        </Card.Body>
                    
                   </Card>
            </Container> 
        </div>  
        </>
    )
}