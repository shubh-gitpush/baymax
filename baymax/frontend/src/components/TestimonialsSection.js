"use client"

import React from "react"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content:
        "This platform has revolutionized how our team works. The intuitive design and powerful features make complex tasks feel effortless.",
      avatar: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Michael Chen",
      role: "CEO at StartupXYZ",
      content:
        "The best investment we've made for our company. ROI was visible within the first month of implementation.",
      avatar: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead at Creative Studio",
      content:
        "Beautiful, functional, and incredibly user-friendly. It's rare to find a tool that excels in all these areas.",
      avatar: "/placeholder.svg?height=150&width=150",
    },
  ]

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const testimonial = testimonials[currentTestimonial]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
              What Our Users Say
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from our satisfied clients about how Baymax has transformed their healthcare experience.
            </p>
          </div>
          <div className="w-full max-w-3xl p-8 shadow-lg rounded-lg bg-white dark:bg-gray-800">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-lg italic text-gray-700 dark:text-gray-300">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-xl font-semibold text-gray-600">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 dark:text-gray-50">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      index === currentTestimonial ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
