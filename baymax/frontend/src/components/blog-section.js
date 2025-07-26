import { Link } from "react-router-dom"
import { Heart, MessageCircle, Eye, Calendar, User, ArrowRight, Bookmark } from 'lucide-react'

export function BlogSection() {
  const blogPosts = [
    {
      title: "The Future of Digital Healthcare",
      excerpt: "As someone who's witnessed healthcare transform over the past decade, I'm excited to share how technology is making medical care more accessible and personal than ever before.",
      image: "/AI.jpg",
      readTime: "5 min read",
      likes: 124,
      comments: 18,
      views: 2847,
      author: "Dr. Sarah Chen",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "March 15, 2024",
      category: "Digital Health",
      featured: true
    },
    {
      title: "Understanding Telemedicine Benefits",
      excerpt: "After conducting over 500 virtual consultations, I've learned that telemedicine isn't just convenient—it's revolutionizing how we connect with patients.",
      image: "/Assistant.jpg",
      readTime: "8 min read",
      likes: 89,
      comments: 12,
      views: 1923,
      author: "Dr. Michael Rodriguez",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "March 12, 2024",
      category: "Telemedicine",
      featured: false
    },
    {
      title: "Personalized Health: AI in Diagnostics",
      excerpt: "From my experience working with AI diagnostic tools, I can tell you that artificial intelligence isn't replacing doctors—it's making us better at what we do.",
      image: "/placeholder.svg?height=250&width=400",
      readTime: "6 min read",
      likes: 156,
      comments: 24,
      views: 3421,
      author: "Dr. Emily Watson",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "March 10, 2024",
      category: "AI & Diagnostics",
      featured: false
    },
  ]

  return (
    <section id="blog" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-black-50 via-black to-black-50 dark:from-black-900 dark:via-black-950 dark:to-black-950">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
            Stories from the Frontlines
            
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Real insights from healthcare professionals who are shaping the future of medicine. 
            These aren't just articles—they're personal experiences and lessons learned in the field.
          </p>
          <div className="mt-6 flex items-center justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-1 w-24 rounded-full"></div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 ${
                post.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ✨ Featured Story
                  </span>
                </div>
              )}

              {/* Bookmark Button */}
              <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                <Bookmark className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>

              {/* Image Container */}
              <div className="relative overflow-hidden">
                <Link to="#" className="block">
                  <img
                    src={post.image || "/placeholder.svg"}
                    width={400}
                    height={post.featured ? 300 : 250}
                    alt={post.title}
                    className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${
                      post.featured ? 'h-64 lg:h-80' : 'h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 ${post.featured ? 'lg:p-8' : ''}`}>
                {/* Author & Date */}
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={post.authorImage || "/placeholder.svg"}
                    alt={post.author}
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{post.author}</p>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`font-bold text-gray-900 dark:text-gray-50 mb-3 leading-tight ${
                  post.featured ? 'text-2xl lg:text-3xl' : 'text-xl'
                }`}>
                  <Link to="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className={`text-gray-600 dark:text-gray-400 leading-relaxed mb-6 ${
                  post.featured ? 'text-base lg:text-lg' : 'text-sm'
                }`}>
                  {post.excerpt}
                </p>

                {/* Stats & Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer">
                      <Eye className="h-4 w-4" /> 
                      {post.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                      <Heart className="h-4 w-4" /> 
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1 hover:text-green-600 transition-colors cursor-pointer">
                      <MessageCircle className="h-4 w-4" /> 
                      {post.comments}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {post.readTime}
                  </span>
                </div>

                {/* Read More Button */}
                <div className="mt-6">
                  <Link 
                    to="#" 
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group/link"
                  >
                    Continue Reading
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Never Miss a Story 📚
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Join 12,000+ healthcare professionals who get our weekly insights delivered straight to their inbox. 
              Real stories, practical tips, no fluff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap">
                Subscribe Free
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              ✓ Weekly insights ✓ No spam ✓ Unsubscribe anytime
            </p>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105"
          >
            <User className="w-5 h-5 mr-2" />
            View All Stories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}