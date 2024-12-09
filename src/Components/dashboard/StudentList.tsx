import { Card, Col, Container, Dropdown, Form, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { studentsListData } from "../../assets/students";
import { useNavigate } from "react-router-dom";
import { BsEyeFill, BsPeopleFill, BsPersonArmsUp, BsPersonBadgeFill } from "react-icons/bs";



export default function StudentList(){
    const navigate = useNavigate();

    return (
        <>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Card className="h-100 shadow" style={{backgroundColor: "rgba(255, 255, 255, 0.2)"}}>
                <Card.Body style={{  
            height: "120vh", overflowY: 'auto',  }}>
                <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
                    <Row>
                        <h4 className="mb-4 mt-4">Students List<span>  <BsPersonBadgeFill /></span></h4>
                        {studentsListData.length > 0 ? studentsListData.map((item: any, index: any) => (
                            <Col key={item.id} sm={12} md={4} className="mb-4">
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
                                            <Dropdown.Item onClick={() => navigate("/student/"+item?.id)}><span><BsEyeFill/> </span>View Profile</Dropdown.Item>
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
                </Container>  
                </Card.Body> 
              </Card> 
        </div>
        </>
    )
}