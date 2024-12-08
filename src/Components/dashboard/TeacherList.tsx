import { Card, Col, Container, Dropdown, Form, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { teachersListData } from "../../assets/teachers";
import { useNavigate } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";


export default function TeacherList(){
    const navigate = useNavigate();

 
    return (
        <>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
                <Row>
                        <h4 className="mb-4 mt-4">Teachers List<span>  <BsPeopleFill /></span></h4>
                        {teachersListData.length > 0 ? teachersListData.map((item: any, index: any) => (
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
                </Container>   
        </div>
        </>
    )
}