import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/Header";
import { Footer } from "./components/footer";
import  RegisterPage  from "./components/Register";
import  PatientRegisterPage  from "./components/PatientRegister";
import  DoctorListPage  from "./components/Doctorlist";
import  UserProfilePage  from "./components/UserProfile";
import Suggestion  from "./components/Suggestion";
import MyAppointmentsPage from "./components/Myappointments";
import AppointmentFormPage  from "./components/AppointmentForm";
// ...other imports
import { HomePage } from "./components/Homepage"; // Import homepage sections

function App() {
  return (
    <Router>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/patient-register" element={<PatientRegisterPage />} />
              <Route path="/doctor-list" element={<DoctorListPage />} />
              <Route path="/user-profile" element={<UserProfilePage />} />
              <Route path="/suggestion" element={<Suggestion />} />
              <Route path="/my-appointments" element={<MyAppointmentsPage />} />
              <Route path="/appointments" element={<AppointmentFormPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
