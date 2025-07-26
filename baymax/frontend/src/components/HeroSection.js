import { Link } from "react-router-dom"
import { Play, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl/none dark:text-gray-50">
                Your Health, Our Priority.
                <br className="hidden sm:inline" /> Seamless Healthcare Management.
              </h1>
              <p className="max-w-[700px] text-lg text-gray-600 md:text-xl dark:text-gray-400 mx-auto lg:mx-0">
                Connect with top doctors, book appointments, manage your health records, and get personalized
                suggestions, all in one place.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="/appointments"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8"
              >
                Book an Appointment
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-12 px-8"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Doctor-patient consultation"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
            />
            <button
              className="absolute inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-16 w-16 shadow-lg transition-transform hover:scale-105"
              aria-label="Play video"
            >
              <Play className="h-8 w-8 fill-current text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
