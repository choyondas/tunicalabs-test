
import './App.css';
import Student from './components/Dashboard/Student/Student';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SingnUp/SignUp';


import { BrowserRouter } from "react-router-dom";
import { Routes, Route,  } from "react-router-dom";
import Employee from './components/Dashboard/Employee/Employee';

function App() {
  return (



    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="student-dashboard" element={<Student/>} />
        <Route path="employee" element={<Employee/>} />
      </Routes>
      


      
    </BrowserRouter>

   
  );
}

export default App;
