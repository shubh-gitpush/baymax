"use client"

import React, { useEffect, useState } from "react"
import {
  Calendar,
  Clock,
  User,
  Stethoscope,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader2,
  Heart,
  Star,
} from "lucide-react"
import API from "../Api"

const AppointmentForm = () => {
  const [doctors, setDoctors] = useState([])
  const [selectedDoctor, setSelectedDoctor] = useState("")
  const [dateTime, setDateTime] = useState("")
  const [symptoms, setSymptoms] = useState("")
  const [patient, setPatient] = useState("")
  const [loading, setLoading] = useState(false)
  const [doctorsLoading, setDoctorsLoading] = useState(true)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [step, setStep] = useState(1)

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setDoctorsLoading(true)
        const response = await API.get("http://127.0.0.1:8000/api/users/suggest-doctors")
        console.log("Doctors fetched:", response.data)
        setDoctors(response.data)
      } catch (error) {
        console.error("Error fetching doctors:", error)
        setError("Failed to load doctors. Please refresh the page.")
      } finally {
        setDoctorsLoading(false)
      }
    }

    fetchDoctors()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const [date, time] = dateTime.split("T")

    try {
      await API.post("http://127.0.0.1:8000/api/appointments/", {
        doctor: selectedDoctor,
        patient: patient,
        date: date,
        time: time,
        symptoms: symptoms,
        status: "Pending",
      })
      setSuccess(true)
      // Reset form
      setSelectedDoctor("")
      setDateTime("")
      setSymptoms("")
      setPatient("")
      setStep(1)
    } catch (error) {
      console.error(error)
      setError("Failed to book appointment. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const getSelectedDoctorInfo = () => {
    return doctors.find((doc) => doc.username === selectedDoctor)
  }

  const isStepValid = () => {
    switch (step) {
      case 1:
        return patient.trim() !== ""
      case 2:
        return selectedDoctor !== ""
      case 3:
        return dateTime !== "" && symptoms.trim() !== ""
      default:
        return false
    }
  }

  // Success Modal
  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-green-950 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center border border-gray-200 dark:border-gray-700">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Appointment Booked! 🎉</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Your appointment has been successfully scheduled. You'll receive a confirmation email shortly with all the
            details.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            Book Your Appointment
            
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Schedule a consultation with our expert doctors. We're here to provide you with the best healthcare
            experience.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-4">
            {[1, 2, 3].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-sm transition-all duration-300 ${
                    step >= stepNumber
                      ? "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 rounded-full transition-all duration-300 ${
                      step > stepNumber
                        ? "bg-gradient-to-r from-blue-600 to-purple-600"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
            <span className={step >= 1 ? "text-blue-600 dark:text-blue-400 font-semibold" : ""}>Patient Info</span>
            <span className={step >= 2 ? "text-blue-600 dark:text-blue-400 font-semibold" : ""}>Choose Doctor</span>
            <span className={step >= 3 ? "text-blue-600 dark:text-blue-400 font-semibold" : ""}>
              Schedule & Details
            </span>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-8">
            <div className="flex items-center">
              <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 mr-3" />
              <p className="text-red-700 dark:text-red-300">{error}</p>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Patient Information */}
            {step === 1 && (
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-8">
                  <User className="w-8 h-8 text-blue-600 mr-4" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Tell us about yourself
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="patient"
                      className="block text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="patient"
                      type="text"
                      value={patient}
                      onChange={(e) => setPatient(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-6 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                      required
                    />
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      Why we need this information
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Your name helps us create your appointment record and ensures our medical staff can properly
                      identify and assist you during your visit.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Doctor Selection */}
            {step === 2 && (
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-8">
                  <Stethoscope className="w-8 h-8 text-blue-600 mr-4" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Choose your doctor
                  </h2>
                </div>

                {doctorsLoading ? (
                  <div className="text-center py-12">
                    <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">Loading our amazing doctors...</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {doctors.map((doc, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedDoctor(doc.username)}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          selectedDoctor === doc.username
                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg"
                            : "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                            {doc.username.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Dr. {doc.username}</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{doc.specialization}</p>
                            <div className="flex items-center mb-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                              <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">4.9 (156 reviews)</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Available: {doc.available_days}</p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              {doc.available_time_start} - {doc.available_time_end}
                            </p>
                          </div>
                          {selectedDoctor === doc.username && <CheckCircle className="w-6 h-6 text-blue-600" />}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Schedule & Details */}
            {step === 3 && (
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-8">
                  <Clock className="w-8 h-8 text-blue-600 mr-4" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Schedule & Details
                  </h2>
                </div>

                <div className="space-y-8">
                  {/* Selected Doctor Summary */}
                  {selectedDoctor && (
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Appointment with Dr. {getSelectedDoctorInfo()?.username}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400">{getSelectedDoctorInfo()?.specialization}</p>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="datetime"
                      className="block text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3"
                    >
                      Preferred Date & Time *
                    </label>
                    <input
                      id="datetime"
                      type="datetime-local"
                      value={dateTime}
                      onChange={(e) => setDateTime(e.target.value)}
                      className="w-full px-6 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="symptoms"
                      className="block text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3"
                    >
                      Describe Your Symptoms *
                    </label>
                    <textarea
                      id="symptoms"
                      placeholder="Please describe your symptoms, concerns, or reason for the visit in detail..."
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      rows={5}
                      className="w-full px-6 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 resize-none"
                      required
                    />
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6">
                    <div className="flex items-start">
                      <FileText className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Helpful Tips</h3>
                        <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                          <li>• Be as specific as possible about your symptoms</li>
                          <li>• Mention when symptoms started and their severity</li>
                          <li>• Include any medications you're currently taking</li>
                          <li>• Note any recent changes in your health</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="bg-gray-50 dark:bg-gray-900 px-8 md:px-12 py-6 flex justify-between items-center">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              <div className="flex items-center space-x-4">
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    Continue
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading || !isStepValid()}
                    className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center min-w-[160px] justify-center"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Booking...
                      </>
                    ) : (
                      <>
                        <Heart className="w-5 h-5 mr-2" />
                        Book Appointment
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-8 text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm">Secure & Private</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm">Instant Confirmation</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentForm
