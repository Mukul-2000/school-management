// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom';
import Login from './View/Public/Login';
import Register from './View/Public/Register';
import Dashboard from './View/Public/Dashboard';
import StudentDetails from './View/Public/StudentDetails';
import TeacherDetails from './View/Public/TeacherDetails';
import ClassDetails from './View/Public/ClassDetails';

export default function MainRouter() {

    return (
        <>
        {/* <Router> */}
            <Routes>
                <Route path='*' element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/student/:id" element={<StudentDetails/>} />
                <Route path="/teacher/:id" element={<TeacherDetails/>} />
                <Route path="/classes" element={<ClassDetails/>} />
            </Routes>
        {/* </Router> */}
        </>
    )
}
