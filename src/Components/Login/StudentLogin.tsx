import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import toast from 'react-hot-toast';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { studentsListData } from "../../assets/students";
import { useNavigate } from "react-router-dom";


export default function StudentLogin(){
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

    const studentData = studentsListData.find((stu: any) => String(stu.email) === loginData?.email);
    if(!studentData){
        toast.error("Email is not registered");
        setLoading(false);
        return
    }

    if(String(studentData.password) != String(loginData.password)){
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
        <div>
                <Container className="d-flex justify-content-center align-items-center " style={{ minHeight: '70vh' }}>
                    <Row className="bg-light">
                        <h4 className="fw-bold mb-3">Student Sign in</h4>
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
                        <button type="submit" className="mt-3 btn btn-primary btn-lg w-100" disabled={loading} onClick={signIn}>Sign in</button>
                        <button className="mt-3 btn btn-warning btn-lg w-100" disabled={loading} onClick={() => navigate("/register")}>Not registered, Sign up now</button>
                    </Row>    
                </Container>   
        </div>
        </>
    )
}