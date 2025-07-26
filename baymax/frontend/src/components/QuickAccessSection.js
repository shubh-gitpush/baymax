import { Link } from "react-router-dom";
import { LogIn, UserPlus, User, CalendarCheck2, ClipboardList, FileText, Users } from "lucide-react";

export function QuickAccessSection() {
  const navCards = [
    {
      to: "/register",
      icon: <LogIn className="h-8 w-8 text-blue-600 mb-2" />,
      title: "Login",
      desc: "Access your account.",
    },
    {
      to: "/patient-register",
      icon: <UserPlus className="h-8 w-8 text-blue-600 mb-2" />,
      title: "Patient Register",
      desc: "Register as a new patient.",
    },
    // If you don't have a doctor-registration page, remove or fix below!
    // {
    //   to: "/doctor-register",
    //   icon: <User className="h-8 w-8 text-blue-600 mb-2" />,
    //   title: "Doctor Register",
    //   desc: "Register as a doctor.",
    // },
    {
      to: "/doctor-list",
      icon: <Users className="h-8 w-8 text-blue-600 mb-2" />,
      title: "Doctor List",
      desc: "Browse all doctors.",
    },
    {
      to: "/my-appointments",
      icon: <CalendarCheck2 className="h-8 w-8 text-blue-600 mb-2" />,
      title: "My Appointments",
      desc: "View your scheduled visits.",
    },
    {
      to: "/appointments",
      icon: <ClipboardList className="h-8 w-8 text-blue-600 mb-2" />,
      title: "Appointment Form",
      desc: "Book a new appointment.",
    },
    {
      to: "/suggestion",
      icon: <FileText className="h-8 w-8 text-blue-600 mb-2" />,
      title: "Suggestion",
      desc: "Get AI-based suggestions.",
    },
    {
      to: "/user-profile",
      icon: <User className="h-8 w-8 text-blue-600 mb-2" />,
      title: "User Profile",
      desc: "View and edit your profile.",
    },
  ];

  return (
    <section
      id="quick-access"
      className="py-20 bg-gradient-to-br from-black-50 via-black to-red-50 dark:from-black-900 dark:via-black-950 dark:to-red-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-gray-50">Healthcare Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            Quickly access all major features of the platform.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {navCards.map((card) => (
            <Link
              to={card.to}
              key={card.title}
              className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 shadow hover:shadow-xl transition group text-center hover:-translate-y-2 dark:border-gray-800 dark:bg-gray-800"
            >
              {card.icon}
              <span className="font-bold text-blue-700 text-lg group-hover:underline mb-1 mt-2 dark:text-blue-400">
                {card.title}
              </span>
              <span className="text-gray-600 text-sm dark:text-gray-400">{card.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
