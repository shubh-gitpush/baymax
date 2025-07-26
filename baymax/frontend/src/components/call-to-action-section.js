import { Link } from "react-router-dom"

export function CallToActionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white dark:bg-blue-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="max-w-[700px] text-lg md:text-xl">
            Join Baymax today and take control of your health journey. Sign up for updates and exclusive offers.
          </p>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1 text-gray-900 focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-50 dark:placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-blue-400 dark:hover:bg-gray-700 h-10 px-4 py-2"
              >
                Sign Up
              </button>
            </form>
            <p className="text-xs text-blue-100 dark:text-blue-200">
              By signing up, you agree to our{" "}
              <Link to="#" className="underline underline-offset-2 hover:text-white">
                Terms &amp; Conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
