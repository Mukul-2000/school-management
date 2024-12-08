import React, { useEffect, useState } from 'react';
import { ListGroup, Container, Row, Col, OverlayTrigger, Card, Dropdown, Tooltip, Navbar, Button } from 'react-bootstrap';
import { studentsListData } from '../../assets/students';
import { teachersListData } from '../../assets/teachers';
import StudentList from '../../Components/dashboard/StudentList';
import TeacherList from '../../Components/dashboard/TeacherList';
import { useNavigate } from 'react-router-dom';
import { BsPeopleFill, BsPerson, BsPersonBadge, BsPersonBadgeFill, BsPersonCheck, BsPersonFillDash } from 'react-icons/bs';


export default function ClassDetails() {
    const classes = [
        { id: "1", name: "1st" },
        { id: "2", name: "2nd" },
        { id: "3", name: "3rd" },
        { id: "4", name: "4th" },
        { id: "5", name: "5th" },
        { id: "6", name: "6th" },
        { id: "7", name: "7th" },
        { id: "8", name: "8th" },
        { id: "9", name: "9th" },
        { id: "10", name: "10th" },
        { id: "11", name: "11th" },
        { id: "12", name: "12th" },
        
    ];

    const [classId, setClassId] = useState("1");
    const [selectedStudents, setSelectedStudents] = useState<any>([]);
    const [selectedTeachers, setSelectedTeachers] = useState<any>([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("ClassId Changed:", classId);
        const classStudents = studentsListData.filter((stu: any) => String(stu.class) === String(classId));
        const classTeachers = teachersListData.filter((teacher: any) => teacher.class.includes(String(classId)));

        console.log("Filtered Students: ", classStudents);
        console.log("Filtered Teachers: ", classTeachers);

        setSelectedStudents(classStudents);
        setSelectedTeachers(classTeachers);

    }, [classId]);


    return (
        <Container fluid>
            <Row>
                <Col md={3} className="bg-light vh-100" style={{ borderRight: '1px solid #ddd' }}>
                    <h4 className="p-3">Classes</h4>
                    <ListGroup variant="flush">
                        {classes.map((classItem) => (
                            <ListGroup.Item key={classItem.id} action onClick={() => setClassId(classItem.id)}>
                                {classItem.name}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
               
               


                {/* Main Content */}
                <Col md={9}>
                    <Container >
                        <Row className="w-100">
                            <Col md={6} style={{ borderRight: '1px solid #ddd' }}>
                            <div className="d-flex flex-column align-items-start" style={{ minHeight: '100vh' }}>
                                {/* <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}> */}
                                    {/* <Row> */}
                                        <h4 className="mb-4 mt-4">Students List<span>  <BsPersonBadgeFill /></span></h4>
                                        <Row className="w-100">
                                        {selectedStudents.length > 0 ? selectedStudents.map((item: any, index: any) => (
                                            <Col key={item.id} sm={12} md={4}  className="mb-4">
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={
                                                    <Tooltip>
                                                        {item.name} - {item.email}
                                                    </Tooltip>
                                                    }
                                                >
                                                <Card className="h-100 shadow">
                                                <Card.Img
                                                    variant="top"
                                                    src={"https://picsum.photos/140"}
                                                    alt={`${item?.name} profile`}
                                                    style={{ height: '150px', objectFit: 'cover' }}
                                                />
                                                    <Card.Body className="d-flex flex-column">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <Card.Title>{item?.name}</Card.Title>
                                                        {/* Dropdown Menu */}
                                                        <Dropdown>
                                                        <Dropdown.Toggle
                                                            variant="link"
                                                            className="text-muted p-0"
                                                            style={{ boxShadow: 'none' }}
                                                        >
                                                            <i className="bi bi-three-dots"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() => navigate("/student/"+item?.id)}>View Profile</Dropdown.Item>
                                                            <Dropdown.Item >Enable</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                    <Card.Text>
                                                        <b>Email:</b> {item?.email} <br />
                                                        <b>Class:</b> {item?.class}
                                                    </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                                </OverlayTrigger>
                                            </Col>
                                        )) : "No student found."}
                                        </Row>
                                    {/* </Row>    
                                </Container>    */}
                            </div>
                            </Col>
                            <Col md={6}>
                            <div className="d-flex flex-column align-items-start" style={{ minHeight: '100vh' }}>
                                {/* <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
                                <Row> */}
                                        <h4 className="mb-4 mt-4">Teachers List<span>  <BsPeopleFill /></span></h4>
                                        <Row className="w-100">
                                        {selectedTeachers.length > 0 ? selectedTeachers.map((item: any, index: any) => (
                                            <Col key={item.id} sm={12} md={4}  className="mb-4">
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={
                                                    <Tooltip>
                                                        {item.name} - {item.email}
                                                    </Tooltip>
                                                    }
                                                >
                                                <Card className="h-100 shadow">
                                                <Card.Img
                                                    variant="top"
                                                    src={"https://picsum.photos/150"}
                                                    alt={`${item?.name} profile`}
                                                    style={{ height: '150px', objectFit: 'cover' }}
                                                />
                                                    <Card.Body className="d-flex flex-column">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <Card.Title>{item?.name}</Card.Title>
                                                        {/* Dropdown Menu */}
                                                        <Dropdown>
                                                        <Dropdown.Toggle
                                                            variant="link"
                                                            className="text-muted p-0"
                                                            style={{ boxShadow: 'none' }}
                                                        >
                                                            <i className="bi bi-three-dots"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() => navigate("/teacher/"+item?.id)}>View Profile</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                    <Card.Text>
                                                        <b>Email:</b> {item?.email} <br />
                                                        <b>Class:</b> {item?.class.join(", ")}
                                                    </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                                </OverlayTrigger>
                                            </Col>
                                        )) : "No Teacher found."}
                                        </Row>
                                    {/* </Row>
                                </Container>    */}
                            </div>
                            </Col>
                        </Row>    
                    </Container>   
                    
                </Col>
            </Row>
        </Container>
    );
}
