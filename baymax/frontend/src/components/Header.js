"use client"

import React from "react"
import { Link } from "react-router-dom"
import { Menu, ChevronDown, LogIn, UserPlus, User, CalendarCheck2, Users, ClipboardList, FileText } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isAccessDropdownOpen, setIsAccessDropdownOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-blue-600"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span className="sr-only">Healthcare Platform</span>
          <span className="text-gray-900 dark:text-gray-50">Baymax</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Testimonials
          </a>
          <a
            href="#blog"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Blog
          </a>
          <div className="relative">
            <button
              onClick={() => setIsAccessDropdownOpen(!isAccessDropdownOpen)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            >
              Access <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isAccessDropdownOpen && (
              <div className="absolute right-0 z-50 mt-2 w-48 rounded-md border bg-white p-1 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                <Link
                  to="/login"
                  className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  onClick={() => setIsAccessDropdownOpen(false)}
                >
                  <LogIn className="h-4 w-4" /> Login
                </Link>
                <Link
                  to="/patient-register"
                  className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  onClick={() => setIsAccessDropdownOpen(false)}
                >
                  <UserPlus className="h-4 w-4" /> Patient Register
                </Link>
                <Link
                  to="/doctor-register"
                  className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  onClick={() => setIsAccessDropdownOpen(false)}
                >
                  <User className="h-4 w-4" /> Doctor Register
                </Link>
              </div>
            )}
          </div>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/login"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            Login
          </Link>
          <Link
            to="/patient-register"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Sign Up
          </Link>
        </div>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </button>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
            <div className="fixed right-0 top-0 h-full w-[300px] sm:w-[400px] bg-white p-6 shadow-lg dark:bg-gray-950">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute right-4 top-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6L18 18" />
                </svg>
                <span className="sr-only">Close menu</span>
              </button>
              <nav className="flex flex-col gap-4 pt-6">
                <a
                  href="#features"
                  className="text-lg font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  className="text-lg font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </a>
                <a
                  href="#blog"
                  className="text-lg font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </a>
                <div className="flex flex-col gap-2 mt-4">
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/patient-register"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
                <div className="mt-4 border-t pt-4">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Quick Access</h3>
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/login"
                      className="flex items-center gap-2 text-sm hover:text-gray-900 dark:hover:text-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LogIn className="h-4 w-4" /> Login
                    </Link>
                    <Link
                      to="/patient-register"
                      className="flex items-center gap-2 text-sm hover:text-gray-900 dark:hover:text-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <UserPlus className="h-4 w-4" /> Patient Register
                    </Link>
                    <Link
                      to="/doctor-register"
                      className="flex items-center gap-2 text-sm hover:text-gray-900 dark:hover:text-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User className="h-4 w-4" /> Doctor Register
                    </Link>
                    <Link
                      to="/my-appointments"
                      className="flex items-center gap-2 text-sm hover:text-gray-900 dark:hover:text-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <CalendarCheck2 className="h-4 w-4" /> My Appointments
                    </Link>
                    <Link
                      to="/doctor-list"
                      className="flex items-center gap-2 text-sm hover:text-gray-900 dark:hover:text-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Users className="h-4 w-4" /> Doctor List
                    </Link>
                    <Link
                      to="/appointments"
                      className="flex items-center gap-2 text-sm hover:text-gray-900 dark:hover:text-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <ClipboardList className="h-4 w-4" /> Appointment Form
                    </Link>
                    <Link
                      to="/suggestion"
                      className="flex items-center gap-2 text-sm hover:text-gray-900 dark:hover:text-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FileText className="h-4 w-4" /> Suggestion
                    </Link>
                    <Link
                      to="/user-profile"
                      className="flex items-center gap-2 text-sm hover:text-gray-900 dark:hover:text-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User className="h-4 w-4" /> User Profile
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
