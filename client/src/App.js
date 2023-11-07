import Signup from "./components/admin/signup/signup"
import Login from "./components/admin/login/login"
import ForgotPassword from "./components/admin/forgotPassword/forgotPassword"
import ResetPassword from "./components/admin/forgotPassword/resetPassword"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import PrimaryPage from "./components/admin/primary page/primaryPage";
import SuccessPage from "./components/admin/forgotPassword/successPage"
import FailedPage from "./components/admin/forgotPassword/failedPage";
import Properties from "./components/admin/properties/viewProperty";
import EmailSent from "./components/admin/forgotPassword/emailSent";
import AddProperty from "./components/admin/properties/addProperty";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/sign-up" element={<Signup />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/forgot-password" element={<ForgotPassword />}> </Route>
          <Route path="/reset-password" element={<ResetPassword />}> </Route>
          <Route path="admin/primary-page" element={<PrimaryPage />}> </Route>
          <Route path="/verification-success" element={<SuccessPage />}> </Route>
          <Route path="/verification-failed" element={<FailedPage />}> </Route>
          <Route path="/admin/properties" element={<Properties />}> </Route>
          <Route path="/admin/add-property" element={<AddProperty />}> </Route>
          <Route path="/verification" element={<EmailSent />}> </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
