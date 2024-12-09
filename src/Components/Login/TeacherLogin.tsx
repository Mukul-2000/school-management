import { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { BsEye, BsEyeSlash, BsPeopleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { teachersListData } from "../../assets/teachers";



export default function TeacherLogin(){
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    function handleChange(e: any) {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    function signIn(){
        setLoading(true);
        if(!loginData.email){
            toast.error("Invalid Email");
            setLoading(false);
            return
        }

        const domain = loginData.email.split('@')[1]?.toLowerCase();
        if(domain != "gmail.com"){
            toast.error("Only gmail domain is allowed.");
            setLoading(false);
            return
        }
        
        if(!loginData.password){
            toast.error("Please enter your password");
            setLoading(false);
            return
        }
    
        const teacherData = teachersListData.find((stu: any) => String(stu.email) === loginData?.email);
        if(!teacherData){
            toast.error("Email is not registered");
            setLoading(false);
            return
        }
    
        if(String(teacherData.password) != String(loginData.password)){
            toast.error("Incorrect password");
            setLoading(false);
            return
        }
    
        toast.success("Signed in Successfully");
        setLoading(false);
        navigate("/dashboard");
        return
    
    }

    return (
        <>
        <div >
                <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
                <Card className="py-3 px-3" style={{width: "100%", backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
                    <Row>
                        <h4 className="fw-bold mb-3"><span><BsPeopleFill />  </span>Teacher Sign in</h4>
                        <Form.Group className="mb-3">
                            <Form.Label>Email Address <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="email" name='email' onChange={handleChange} placeholder="example@domain" required/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password <span className='text-danger'>*</span></Form.Label>
                            <div className="input-group">
                            <Form.Control type={!showPassword ? 'password' : 'text'} name='password' onChange={handleChange} required/>
                            <span className="input-group-text"  onClick={() => setShowPassword(!showPassword)}>
                                {
                                showPassword ?
                                    <BsEye className="eye-icon" />
                                    :
                                    <BsEyeSlash className="eye-icon" />
                                }
                            </span>
                            </div>
                        </Form.Group> 
                        <div className="d-flex justify-content-between align-items-center" style={{ gap: '10px' }}>
                            <div>

                                <button type="submit" className="mt-3 btn btn-primary btn-sm" disabled={loading} onClick={signIn} style={{marginRight: "10px"}}>Sign in</button>
                                <button className="mt-3 btn btn-warning btn-sm" disabled={loading} onClick={() => navigate("/register")}> Sign up now</button>
                            </div>
                            <div>
                                <button className="mt-3 btn btn-sm" style={{backgroundColor: "white"}}>
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22 11.4822C22 10.5631 21.9251 9.89234 21.7631 9.19678H11.2246V13.3453H17.4104C17.2858 14.3763 16.6123 15.9289 15.1157 16.9722L15.0947 17.1111L18.4268 19.682L18.6576 19.7049C20.7778 17.7548 22 14.8855 22 11.4822Z"
                                    fill="#4285F4" />
                                <path
                                    d="M11.2244 22.4123C14.255 22.4123 16.7991 21.4185 18.6574 19.7045L15.1155 16.9718C14.1677 17.6301 12.8956 18.0897 11.2244 18.0897C8.25621 18.0897 5.73698 16.1397 4.83894 13.4443L4.70731 13.4555L1.24258 16.126L1.19727 16.2514C3.04304 19.9032 6.83439 22.4123 11.2244 22.4123Z"
                                    fill="#34A853" />
                                <path
                                    d="M4.83891 13.4441C4.60196 12.7485 4.46482 12.0032 4.46482 11.2331C4.46482 10.463 4.60196 9.71776 4.82645 9.02219L4.82017 8.87405L1.31202 6.16064L1.19724 6.21502C0.436509 7.73039 0 9.4321 0 11.2331C0 13.0342 0.436509 14.7358 1.19724 16.2512L4.83891 13.4441Z"
                                    fill="#FBBC05" />
                                <path
                                    d="M11.2244 4.37715C13.3321 4.37715 14.7538 5.28388 15.5645 6.04161L18.7323 2.96119C16.7867 1.16016 14.255 0.0546875 11.2244 0.0546875C6.83439 0.0546875 3.04304 2.5637 1.19727 6.21543L4.82647 9.02261C5.73698 6.32726 8.25621 4.37715 11.2244 4.37715Z"
                                    fill="#EB4335" />
                                </svg>
                                &nbsp;Continue with Google
                            </button>
                            </div>
                        </div>
                    </Row>   
                    </Card>
                </Container>   
        </div>
        </>
    )
}