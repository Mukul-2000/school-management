import React from 'react';
// import logo from './logo.svg';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BrowserRouter } from "react-router-dom";

import './App.css';
import MainRouter from './Router';

const App: React.FC = () => {
  return (
  //   <Container>
  //   <div className="row">
  //     <div className="col-md-6 mb-4">
  //       <div className="p-3 bg-light border rounded">
  //         <Typography variant="h5" gutterBottom>
  //           Material-UI Typography
  //         </Typography>
  //         <Typography variant="body1">
  //           This text is styled using Material-UI.
  //         </Typography>
  //         <Button variant="contained" color="primary" className="mt-3">
  //           Material-UI Button
  //         </Button>
  //       </div>
  //     </div>
  //     <div className="col-md-6 mb-4">
  //       <div className="p-3 bg-primary text-white border rounded">
  //         <h5>Bootstrap Card</h5>
  //         <p>This section is styled using Bootstrap.</p>
  //         <button className="btn btn-light">Bootstrap Button</button>
  //       </div>
  //     </div>
  //   </div>
  // </Container>
  <>
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>
  </>
  );
}

export default App;
