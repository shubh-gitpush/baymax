import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="w-full border-t bg-gray-100 py-8 dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-black-600"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">Baymax</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm md:gap-6">
          <Link to="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            Privacy Policy
          </Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            Terms of Service
          </Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            Contact Us
          </Link>
        </nav>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Baymax. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
