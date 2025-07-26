"use client"

import { useState } from "react"
import { Search, Stethoscope, Clock, Calendar, Mail, AlertCircle, Loader2, Star, MapPin, Phone } from "lucide-react"

const SuggestDoctors = () => {
  const [symptoms, setSymptoms] = useState("")
  const [doctors, setDoctors] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async () => {
    if (!symptoms.trim()) {
      setError("Please enter your symptoms to find the right doctor for you.")
      return
    }

    setLoading(true)
    setError("")
    setHasSearched(true)

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/users/suggest-doctors/?symptoms=${encodeURIComponent(symptoms)}`,
      )
      if (!response.ok) {
        const errText = await response.text()
        throw new Error(errText)
      }
      const data = await response.json()
      if (data.length === 0) {
        setError(
          "We couldn't find any doctors matching your symptoms right now. Try different keywords or contact our support team.",
        )
      } else {
        setError("")
      }
      setDoctors(data)
    } catch (err) {
      console.error("Error fetching doctors:", err)
      setError("Something went wrong while searching for doctors. Please try again in a moment.")
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const commonSymptoms = [
    "Headache & Migraine",
    "Fever & Cold",
    "Stomach Pain",
    "Back Pain",
    "Chest Pain",
    "Skin Issues",
    "Anxiety & Stress",
    "Joint Pain",
  ]

  const handleSymptomClick = (symptom) => {
    setSymptoms(symptom)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-50 via-white to-black-50 dark:from-black-900 dark:via-black-950 dark:to-black-950 py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <Stethoscope className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            Find the Right Doctor for your symptoms
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Tell us what you're experiencing, and we'll connect you with specialists who can help. Our smart matching
            system finds doctors based on your specific symptoms.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="max-w-2xl mx-auto">
            <label htmlFor="symptoms" className="block text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Describe your symptoms
            </label>
            <div className="relative">
              <input
                id="symptoms"
                type="text"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="e.g., persistent headache, fever for 3 days, stomach pain after eating..."
                className="w-full px-6 py-4 pr-16 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                disabled={loading}
              />
              <button
                onClick={handleSearch}
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[100px]"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </>
                )}
              </button>
            </div>

            {/* Common Symptoms */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Common symptoms:</p>
              <div className="flex flex-wrap gap-2">
                {commonSymptoms.map((symptom, index) => (
                  <button
                    key={index}
                    onClick={() => handleSymptomClick(symptom)}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-200"
                  >
                    {symptom}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-8">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                  Oops! Something went wrong
                </h3>
                <p className="text-red-700 dark:text-red-300">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
            <p className="text-lg text-gray-600 dark:text-gray-400">Finding the best doctors for your symptoms...</p>
          </div>
        )}

        {/* Results */}
        {hasSearched && !loading && doctors.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50">
                Recommended Doctors ({doctors.length})
              </h2>
              <div className="text-sm text-gray-500 dark:text-gray-400">Based on: "{symptoms}"</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {doctors.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden group"
                >
                  {/* Doctor Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                          {doc.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Dr. {doc.username}</h3>
                          <div className="flex items-center mt-1">
                            <Stethoscope className="w-4 h-4 text-blue-600 mr-2" />
                            <span className="text-blue-600 dark:text-blue-400 font-semibold">{doc.specialization}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-green-700 dark:text-green-400 text-sm font-medium">Available</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < 4 ? "text-yellow-400 fill-current" : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">4.8 (127 reviews)</span>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {doc.bio ||
                        "Experienced healthcare professional dedicated to providing comprehensive medical care with a focus on patient comfort and well-being."}
                    </p>
                  </div>

                  {/* Doctor Details */}
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 gap-4">
                      {/* Contact Info */}
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Mail className="w-5 h-5 mr-3 text-blue-600" />
                        <span className="text-sm">{doc.email}</span>
                      </div>

                      {/* Availability */}
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                        <span className="text-sm">Available: {doc.available_days}</span>
                      </div>

                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Clock className="w-5 h-5 mr-3 text-blue-600" />
                        <span className="text-sm">
                          {doc.available_time_start} - {doc.available_time_end}
                        </span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                        <span className="text-sm">Downtown Medical Center</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment
                      </button>
                      <button className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
                        <Phone className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Match Indicator */}
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm font-medium"> Great match for your symptoms</span>
                      <span className="text-sm opacity-90">95% match</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {hasSearched && !loading && doctors.length === 0 && !error && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">No doctors found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              We couldn't find any doctors matching your symptoms. Try using different keywords or contact our support
              team for assistance.
            </p>
            <button
              onClick={() => {
                setSymptoms("")
                setHasSearched(false)
                setError("")
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200"
            >
              Try Another Search
            </button>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Help Finding the Right Doctor? 🩺</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our medical team is here to help you find the perfect specialist for your needs. Get personalized
            recommendations based on your medical history and preferences.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200">
            Talk to Our Medical Team
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuggestDoctors
