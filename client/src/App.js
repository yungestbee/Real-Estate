import Signup from "./components/signup/signup"
import Login from "./components/login/login"
import ForgotPassword from "./components/forgotPassword/forgotPassword"
import ResetPassword from "./components/forgotPassword/resetPassword"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/sign-up" element={<Signup />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/forgot-password" element={<ForgotPassword />}> </Route>
          <Route path="/reset-password" element={<ResetPassword />}> </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
