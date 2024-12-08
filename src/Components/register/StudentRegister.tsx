import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import toast from 'react-hot-toast';
import Select from "react-select"


export default function StudentRegister(){
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [selectValue, setSelectValue] = useState<any>();
  const [selectGenderValue, setSelectGenderValue] = useState<any>();


  const [studentData, setStudentData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    class: '',
    rollNo: '',
    school: '',
    dob: '',
    studentName: '',
    gender: ''
  });

  const genderOptions = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'}
  ]

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

  function handleChange(e: any) {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });

    if (e.target.name === 'confirmPassword' || e.target.name === 'password') {
        setPasswordMatch(e.target.value === studentData.password);
    }
  }

  async function register(){
    setLoading(true);

    console.log(studentData, "stuuuuuu")
    
    if(!studentData.email || !studentData.password || !studentData.confirmPassword || !studentData.dob || !studentData.studentName || !selectValue.value || !selectGenderValue || !studentData.rollNo || !studentData.school){
        toast.error("All fields are mandatory");
        setLoading(false);
        return
    }
    if(!passwordMatch){
        toast.error("Password Does not match");
        setLoading(false);
        return
    }


    toast.success("Registration Successful");
    const studentClass = selectValue.value;
    const studentGender = selectGenderValue.value;
    const finalStudentData = {...studentData, class: studentClass, gender: studentGender};

    console.log(finalStudentData, "finalStudentData")
    setSelectValue('')
    setStudentData({
        email: '',
        password: '',
        confirmPassword: '',
        class: '',
        rollNo: '',
        school: '',
        dob: '',
        studentName: '',
        gender: ''
    })
    setLoading(false);
    return
  }
    return (
        <>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
                    <Row>
                        <h4 className="fw-bold mb-3">Student Registration</h4>
                        <Form.Group className="mb-3">
                            <Form.Label>Email Address <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="email" name='email' onChange={handleChange} placeholder="example@domain" value={studentData?.email} required/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Name <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="text" name='studentName' onChange={handleChange} placeholder="1234" value={studentData?.studentName} required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Gender <span className='text-danger'>*</span>
                            </Form.Label>
                            {/* <Form.Control type="text" name="class" onChange={handleChange} placeholder="enter class in format 1 or 2 till 12" value={studentData?.class} required></Form.Control> */}
                            <Select options={genderOptions} name='gender' value={selectGenderValue} onChange={(e: any) => setSelectGenderValue(e)} />
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Date of Birth <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="date" name='dob' placeholder="Enter age" value={(studentData?.dob)} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Roll No. <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="text" name='rollNo' onChange={handleChange} placeholder="1234" value={studentData?.rollNo} required/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>School <span className='text-danger'>*</span></Form.Label>
                            <Form.Control type="text" name='school' onChange={handleChange} placeholder="abcd" value={studentData?.school} required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Class <span className='text-danger'>*</span>
                            </Form.Label>
                            {/* <Form.Control type="text" name="class" onChange={handleChange} placeholder="enter class in format 1 or 2 till 12" value={studentData?.class} required></Form.Control> */}
                            <Select options={classOptions} name='class' value={selectValue} onChange={(e: any) => setSelectValue(e)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password <span className='text-danger'>*</span></Form.Label>
                            <div className="input-group">
                            <Form.Control type={!showPassword ? 'password' : 'text'} name='password' onChange={handleChange} value={studentData?.password} required/>
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
                            <Form.Control type={!showConfirmPassword ? 'password' : 'text'} name='confirmPassword' onChange={handleChange} value={studentData?.confirmPassword} required/>
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