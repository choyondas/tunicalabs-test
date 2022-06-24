
import './App.css';
import Employee from './components/Dashboard/Employee/Employee';
import Student from './components/Dashboard/Student/Student';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SingnUp/SignUp';


function App() {
  return (



    <div>
      <SignIn />
      <SignUp />
      <Student />
      <Employee/>
    </div>

   
  );
}

export default App;
