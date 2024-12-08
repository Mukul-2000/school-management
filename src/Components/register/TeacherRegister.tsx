import { useState } from "react";
import { Col, Container, Form, Row, } from "react-bootstrap";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import toast from 'react-hot-toast';
import Select from "react-select"
import { useNavigate } from "react-router-dom";
import moment from "moment";



export default function TeacherRegister(){
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [selectValue, setSelectValue] = useState<any>([]);
  const [selectGenderValue, setSelectGenderValue] = useState<any>([]);

  const navigate = useNavigate();


  const classOptions = [
    {label: "1st", value: "1"},
    {label: "2nd", value: "2"},
    {label: "3rd", value: "3"},
    {label: "4th", value: "4"},
    {label: "5th", value: "5"},
    {label: "6th", value: "6"},
    {label: "7th", value: "7"},
    {label: "8th", value: "8"},
    {label: "9th", value: "9"},
    {label: "10th", value: "10"},
    {label: "11th", value: "11"},
    {label: "12th", value: "12"},
  ];

  const genderOptions = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'}
  ]

  const [teacherData, setTeacherData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    class: [],
    teacherName: '',
    dob: '',
    experience: '',
    qualification: '',
    gender: ''
  });

  function handleChange(e: any) {
    setTeacherData({ ...teacherData, [e.target.name]: e.target.value });

    if (e.target.name === 'confirmPassword' || e.target.name === 'password') {
        setPasswordMatch(e.target.value === teacherData.password);
    }
  }

  async function register(){
    setLoading(true);
    
    if(!teacherData.email || !teacherData.password || !teacherData.confirmPassword || !teacherData.dob || !selectGenderValue || !teacherData.experience || !selectValue || !teacherData.teacherName || !teacherData.qualification){
        toast.error("All fields are mandatory");
        setLoading(false);
        return
    }

    const domain = teacherData.email.split('@')[1]?.toLowerCase();
    if(domain != "gmail.com"){
        toast.error("Only gmail domain is allowed.");
        setLoading(false);
        return
    }
    
    if(!passwordMatch){
        toast.error("Password Does not match");
        setLoading(false);
        return
    }
    const teacherClasses = selectValue.map((cla: any) => cla.value);
    const finalTeacherData = {...teacherData, class: teacherClasses};

    console.log(finalTeacherData, "finalTeacherData")
    setLoading(false);
    toast.success(" Teacher Registration Successful");
    setSelectValue([])
    setTeacherData({
        email: '',
        password: '',
        confirmPassword: '',
        class: [],
        teacherName: '',
        dob: '',
        experience: '',
        qualification: '',
        gender: ''
    })
    navigate("/login")

    return
  }
    return (
        <>
        <div className="d-flex justify-content-center align-items-center bg-light" style={{ minHeight: '100vh' }}>
                <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
                    <Row>
                        <h4 className="fw-bold mb-3">Teacher Registration</h4>
                        <Form.Group className="mb-3">
                            <Form.Label>Email Address <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="email" name='email' onChange={handleChange} placeholder="example@domain" value={teacherData?.email} required/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Name <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="text" name='teacherName' onChange={handleChange} placeholder="John" value={teacherData?.teacherName} required/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Gender <span className='text-danger'>*</span>
                            </Form.Label>
                            <Select options={genderOptions} name='gender' value={selectGenderValue} onChange={(e: any) => setSelectGenderValue(e)} />
                        </Form.Group>

                        
                        <Form.Group className="mb-3">
                            <Form.Label>Date of Birth <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="date" name='dob' placeholder="Enter age" value={(teacherData?.dob)} onChange={handleChange} max={moment().subtract(21, "years").format("YYYY-MM-DD")} required/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Experience <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="text" name='experience' placeholder="In Years" value={(teacherData?.experience)} onChange={handleChange} required/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Qualification <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="text" name='qualification' placeholder="Qualification" value={(teacherData?.qualification)} onChange={handleChange} required/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Classes You Teach <span className='text-danger'>*</span>
                            </Form.Label>
                            {/* <Form.Control type="text" name="class" onChange={handleChange} placeholder="enter class in format 1 or 2 till 12" value={teacherData?.class} required></Form.Control> */}
                            <Select options={classOptions} name='class' isMulti value={selectValue} onChange={(e: any) => setSelectValue(e)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password <span className='text-danger'>*</span></Form.Label>
                            <div className="input-group">
                            <Form.Control type={!showPassword ? 'password' : 'text'} name='password' onChange={handleChange} value={teacherData?.password} required/>
                            <span className="input-group-text"  onClick={() => setShowPassword(!showPassword)}>
                                {
                                showPassword ?
                                    <BsEye className="eye-icon" />
                                    :
                                    <BsEyeSlash className="eye-icon" />
                                }
                            </span>
                            </div>
                            {!passwordMatch && (
                                    <Form.Text className="text-danger">
                                        Passwords do not match.
                                    </Form.Text>
                                )}
                        </Form.Group> 
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password <span className='text-danger'>*</span></Form.Label>
                            <div className="input-group">
                            <Form.Control type={!showConfirmPassword ? 'password' : 'text'} name='confirmPassword' onChange={handleChange} value={teacherData?.confirmPassword} required/>
                            <span className="input-group-text"  onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {
                                showConfirmPassword ?
                                    <BsEye className="eye-icon" />
                                    :
                                    <BsEyeSlash className="eye-icon" />
                                }
                            </span>
                            </div>
                            {!passwordMatch && (
                                    <Form.Text className="text-danger">
                                        Passwords do not match.
                                    </Form.Text>
                                )}
                        </Form.Group> 
                        <button type="submit" className="mt-3 btn btn-primary btn-lg w-100" disabled={loading} onClick={() => register()}>Register</button>
                    </Row>    
                </Container>   
        </div>
        </>
    )
}