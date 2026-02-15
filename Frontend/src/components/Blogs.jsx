import { useState } from 'react'

function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "The Magic of Live Theater: Why Nothing Compares",
      excerpt: "Discover why live performances create unique experiences that movies and streaming can't replicate...",
      content: "Full article content here...",
      author: "Sarah Johnson",
      date: "March 10, 2026",
      category: "Theater Insights",
      image: "🎭",
      readTime: "5 min read",
      likes: 234
    },
    {
      id: 2,
      title: "Behind the Scenes: Setting Up a Theater Production",
      excerpt: "An exclusive look at what goes into preparing a major theatrical performance...",
      content: "Full article content here...",
      author: "Michael Chen",
      date: "March 8, 2026",
      category: "Behind the Scenes",
      image: "🎪",
      readTime: "8 min read",
      likes: 156
    },
    {
      id: 3,
      title: "Top 10 Must-See Shows This Spring",
      excerpt: "Our curated list of the best theatrical performances coming to Ethiopia this season...",
      content: "Full article content here...",
      author: "Emily Williams",
      date: "March 5, 2026",
      category: "Recommendations",
      image: "📋",
      readTime: "6 min read",
      likes: 412
    },
    {
      id: 4,
      title: "The Evolution of Ethiopian Theater",
      excerpt: "Tracing the rich history and modern transformation of theater in Ethiopia...",
      content: "Full article content here...",
      author: "Dr. Tadesse Ayele",
      date: "March 1, 2026",
      category: "History",
      image: "📚",
      readTime: "10 min read",
      likes: 189
    },
    {
      id: 5,
      title: "Interview with Award-Winning Director",
      excerpt: "Exclusive conversation about creative process and the future of theater...",
      content: "Full article content here...",
      author: "Lisa Kumar",
      date: "February 25, 2026",
      category: "Interviews",
      image: "🎬",
      readTime: "7 min read",
      likes: 267
    },
    {
      id: 6,
      title: "Tips for First-Time Theater Goers",
      excerpt: "Everything you need to know before attending your first live performance...",
      content: "Full article content here...",
      author: "David Mensah",
      date: "February 20, 2026",
      category: "Guides",
      image: "🎟️",
      readTime: "4 min read",
      likes: 345
    }
  ]

  // Get unique categories
  const categories = ['all', ...new Set(blogs.map(blog => blog.category))]

  // Filter blogs by category and search
  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">
            TheaterHub <span className="text-secondary">Blogs</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Insights, stories, and updates from the world of theater
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <input
              type="text"
              placeholder="Search blogs by title, content, or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-lg"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400">
              🔍
            </span>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all transform hover:-translate-y-1 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all">
                {/* Blog Image/Icon */}
                <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center text-7xl relative">
                  <span className="absolute top-4 right-4 bg-secondary/90 text-primary-dark px-3 py-1 rounded-full text-sm font-semibold">
                    {blog.category}
                  </span>
                  {blog.image}
                </div>
                
                {/* Blog Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">👤 {blog.author}</span>
                    <span className="flex items-center gap-1">📅 {blog.date}</span>
                    <span className="flex items-center gap-1">⏱️ {blog.readTime}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary-dark mb-3 hover:text-primary cursor-pointer">
                    {blog.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button className="text-primary font-semibold hover:text-secondary transition-colors flex items-center gap-2">
                      Read More <span>→</span>
                    </button>
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
                        <span>❤️</span> {blog.likes}
                      </button>
                      <button className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors">
                        <span>💬</span> Share
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-md max-w-lg mx-auto">
            <span className="text-6xl mb-4 block">📝</span>
            <p className="text-gray-500 text-xl mb-4">No blogs found matching "{searchTerm}"</p>
            <button 
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
              className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredBlogs.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Load More Articles
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">Subscribe to Our Blog</h2>
          <p className="text-gray-600 mb-8">
            Get the latest theater insights and updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border-2 border-gray-200 focus:outline-none focus:border-primary"
            />
            <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs