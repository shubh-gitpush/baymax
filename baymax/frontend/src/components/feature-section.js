"use client"

import React from "react"
import { Zap, Shield, Users, Award } from "lucide-react"

export function FeaturesSection() {
  const [stats, setStats] = React.useState({ users: 0, projects: 0, satisfaction: 0 })

  React.useEffect(() => {
    const animateStats = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps
      const targets = { users: 50000, projects: 12000, satisfaction: 98 }
      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const easeOut = 1 - Math.pow(1 - progress, 3)
        setStats({
          users: Math.floor(targets.users * easeOut),
          projects: Math.floor(targets.projects * easeOut),
          satisfaction: Math.floor(targets.satisfaction * easeOut),
        })
        if (step >= steps) clearInterval(timer)
      }, stepDuration)
    }
    animateStats()
  }, [])

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Lightning Fast",
      description: "Built with performance in mind. Experience blazing fast load times and smooth interactions.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee. Your data is always protected.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team. Real-time collaboration tools built for modern workflows.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Award Winning",
      description: "Recognized by industry leaders. Winner of multiple design and innovation awards.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-black-50 dark:bg-black-900">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
              Powerful Features for Modern Healthcare
            </h2>
            <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mx-auto lg:mx-0">
              Our platform is designed to streamline your healthcare experience with cutting-edge technology and
              user-friendly tools.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 text-center shadow-md rounded-lg bg-white dark:bg-gray-800"
              >
                <div className="pb-4">
                  {feature.icon}
                  <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-50">{feature.title}</h3>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">{stats.users.toLocaleString()}+</div>
            <p className="text-lg text-gray-600 dark:text-gray-400">Active Users</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">
              {stats.projects.toLocaleString()}+
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">Appointments Booked</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">{stats.satisfaction}%</div>
            <p className="text-lg text-gray-600 dark:text-gray-400">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
