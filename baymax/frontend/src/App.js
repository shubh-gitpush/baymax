import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Login from './componenets/Login';
import Register from './componenets/Register';
import PatientRegister from './componenets/PatientRegister';
import UserProfile from './componenets/UserProfile';
import MyAppointments from './componenets/Myappointments';
import Dashboard from './componenets/Dashboard';
import Suggestion from './componenets/Suggestion';
import AppointmentForm from './componenets/AppointmentForm';
import Doctorlist from './componenets/Doctorlist';

// Simple layout wrapper with navbar
const Layout = () => (
  <div className="min-h-screen bg-gray-100">
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Baymax</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-500">Login</Link>
        <Link to="/register" className="text-gray-700 hover:text-blue-500">Register</Link>
      </div>
    </nav>
    <main className="p-6">
      <Outlet />
    </main>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="patientregister" element={<PatientRegister />} />
          <Route path="Doctorlist" element={<Doctorlist />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="suggestion" element={<Suggestion />} />
          <Route path="appointments" element={<MyAppointments />} />
          <Route path="myappointments" element={<AppointmentForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
