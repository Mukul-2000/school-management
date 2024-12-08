// import { Container } from "@mui/material";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { teachersListData } from "../../assets/teachers";
import { BsPeople, BsPeopleFill } from "react-icons/bs";



export default function TeacherDetails(){
    const {id} = useParams();
    const navigate = useNavigate();
    

    const teacherData: any = teachersListData.find((stu: any) => String(stu.id) === String(id));


    return (
        <>
            <Container className="py-4">
                        <Button className="btn-primary mb-3" onClick={() => navigate(-1)}>Back</Button>
                        <h4 className="mb-4">Teacher Details<span>  <BsPeopleFill /></span></h4> 
                        <Card className="w-100 shadow">
                        <Card.Img
                            variant="top"
                            src={"https://picsum.photos/300"}
                            alt={`${teacherData?.name} profile`}
                            style={{ height: '300px', objectFit: 'cover' }}
                        />
                        <Card.Body className="d-flex flex-column">
                            <div className="d-flex justify-content-between align-items-center">
                                <Card.Title>{teacherData?.name}</Card.Title>
                            </div>
                            <Card.Text>
                                <b>Email:</b> {teacherData?.email} <br />
                                <b>School:</b> {teacherData?.school} <br />
                                <b>Roll No.:</b> {teacherData?.rollNo} <br />
                                <b>Gender:</b> {teacherData?.gender} <br />
                                <b>DOB:</b> {teacherData?.dob} <br />
                                <b>Class:</b> {teacherData?.class.join(", ")}
                            </Card.Text>
                        </Card.Body>
                    
                   </Card>
            </Container>   
        </>
    )
}