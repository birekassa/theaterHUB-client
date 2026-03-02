import { useState } from 'react'
import { Link } from 'react-router-dom'

function Help() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openFaq, setOpenFaq] = useState(null)

  // Help categories
  const categories = [
    { id: 'all', name: 'All Help', icon: '📚', count: 24 },
    { id: 'booking', name: 'Booking & Tickets', icon: '🎟️', count: 8 },
    { id: 'account', name: 'Account & Profile', icon: '👤', count: 6 },
    { id: 'payment', name: 'Payments & Refunds', icon: '💳', count: 5 },
    { id: 'theater', name: 'For Theater Managers', icon: '🏛️', count: 5 }
  ]

  // Help articles data
  const helpArticles = [
    {
      id: 1,
      title: 'How to Book Tickets',
      category: 'booking',
      description: 'Step-by-step guide to booking tickets for your favorite shows',
      icon: '🎟️',
      views: 1234,
      helpful: 95,
      content: `
        <h3>Booking tickets on TheaterHub is easy!</h3>
        <ol>
          <li>Browse events on the home page or use search filters</li>
          <li>Click on your preferred show to view details</li>
          <li>Select your seats from the interactive seat map</li>
          <li>Review your booking and proceed to payment</li>
          <li>Choose payment method and complete transaction</li>
          <li>Receive your QR code tickets via email and SMS</li>
        </ol>
        <p>Pro tip: Book early to get the best seats!</p>
      `
    },
    {
      id: 2,
      title: 'How to Cancel a Booking',
      category: 'booking',
      description: 'Learn about our cancellation policy and refund process',
      icon: '❌',
      views: 987,
      helpful: 88,
      content: `
        <h3>Cancellation Policy</h3>
        <p>You can cancel your booking up to 24 hours before the show starts for a full refund.</p>
        <h4>Steps to cancel:</h4>
        <ol>
          <li>Log into your account</li>
          <li>Go to "My Bookings" section</li>
          <li>Find the booking you want to cancel</li>
          <li>Click "Cancel Booking" button</li>
          <li>Confirm cancellation</li>
        </ol>
        <p>Refunds are processed within 3-5 business days.</p>
      `
    },
    {
      id: 3,
      title: 'Creating Your Account',
      category: 'account',
      description: 'Quick guide to setting up your TheaterHub account',
      icon: '👤',
      views: 1567,
      helpful: 98,
      content: `
        <h3>Create your account in minutes:</h3>
        <ol>
          <li>Click "Sign Up" in the top navigation</li>
          <li>Enter your name, email, and password</li>
          <li>Verify your email address</li>
          <li>Complete your profile (optional)</li>
          <li>Start booking shows!</li>
        </ol>
        <p>Benefits of having an account:</p>
        <ul>
          <li>Faster checkout</li>
          <li>View booking history</li>
          <li>Save favorite theaters</li>
          <li>Get personalized recommendations</li>
        </ul>
      `
    },
    {
      id: 4,
      title: 'Accepted Payment Methods',
      category: 'payment',
      description: 'All payment options available on TheaterHub',
      icon: '💳',
      views: 2134,
      helpful: 92,
      content: `
        <h3>We accept the following payment methods:</h3>
        <ul>
          <li><strong>Mobile Money:</strong> M-Pesa, Telebirr</li>
          <li><strong>Bank Transfer:</strong> All Ethiopian banks</li>
          <li><strong>Credit/Debit Cards:</strong> Visa, Mastercard</li>
          <li><strong>Cash:</strong> At theater box offices</li>
        </ul>
        <p>All payments are securely processed and encrypted.</p>
      `
    },
    {
      id: 5,
      title: 'Refund Policy',
      category: 'payment',
      description: 'Understanding our refund process and timeline',
      icon: '💰',
      views: 876,
      helpful: 85,
      content: `
        <h3>Refund Policy</h3>
        <p>Refunds are processed under these conditions:</p>
        <ul>
          <li>Cancellation at least 24 hours before show: 100% refund</li>
          <li>Cancellation within 24 hours: No refund</li>
          <li>Show cancelled by theater: 100% refund</li>
          <li>Technical issues: Case-by-case review</li>
        </ul>
        <p>Refunds typically take 3-5 business days to process.</p>
      `
    },
    {
      id: 6,
      title: 'How to Use QR Code Tickets',
      category: 'booking',
      description: 'Guide to accessing and using your digital tickets',
      icon: '📱',
      views: 1456,
      helpful: 96,
      content: `
        <h3>Using Your QR Code Tickets</h3>
        <ol>
          <li>Check your email or SMS after booking</li>
          <li>Open the ticket on your phone</li>
          <li>Save the QR code to your phone's wallet (optional)</li>
          <li>Present the QR code at the theater entrance</li>
          <li>Staff will scan for entry</li>
        </ol>
        <p>Note: Screenshots of QR codes also work!</p>
      `
    },
    {
      id: 7,
      title: 'Registering Your Theater',
      category: 'theater',
      description: 'How to list your theater on TheaterHub',
      icon: '🏛️',
      views: 654,
      helpful: 90,
      content: `
        <h3>Theater Registration Process</h3>
        <ol>
          <li>Click "Register Theater" on the homepage</li>
          <li>Fill in theater details (name, location, capacity)</li>
          <li>Submit required documents</li>
          <li>Wait for admin approval (1-2 business days)</li>
          <li>Set up your seating layout and pricing</li>
          <li>Start creating events!</li>
        </ol>
      `
    },
    {
      id: 8,
      title: 'Managing Your Events',
      category: 'theater',
      description: 'Tools and tips for theater managers',
      icon: '📅',
      views: 543,
      helpful: 87,
      content: `
        <h3>Event Management Dashboard</h3>
        <p>As a theater manager, you can:</p>
        <ul>
          <li>Create and schedule shows</li>
          <li>Set ticket prices by section</li>
          <li>View real-time sales data</li>
          <li>Generate revenue reports</li>
          <li>Manage seating layouts</li>
          <li>Communicate with attendees</li>
        </ul>
      `
    },
    {
      id: 9,
      title: 'Troubleshooting Login Issues',
      category: 'account',
      description: 'Solutions for common login problems',
      icon: '🔑',
      views: 2345,
      helpful: 91,
      content: `
        <h3>Can't log in? Try these solutions:</h3>
        <ul>
          <li><strong>Forgot password:</strong> Click "Forgot Password" to reset</li>
          <li><strong>Account locked:</strong> Wait 15 minutes and try again</li>
          <li><strong>Email not verified:</strong> Check your spam folder for verification email</li>
          <li><strong>Browser issues:</strong> Clear cache and cookies</li>
        </ul>
        <p>Still having issues? Contact support with your email address.</p>
      `
    }
  ]

  // Filter articles based on search and category
  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory
    return matchesSearch && matchesCategory
  })

  // Featured articles (most viewed)
  const featuredArticles = [...helpArticles].sort((a, b) => b.views - a.views).slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-dark to-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 15 L61 40 L88 44 L67 62 L72 90 L50 76 L28 90 L33 62 L12 44 L39 40 Z" fill="%23D4AF37"/></svg>')`,
            backgroundSize: '100px'
          }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
            How Can We <span className="text-secondary">Help?</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 animate-fadeInUp animation-delay-200">
            Search our help center or browse categories below
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto animate-fadeInUp animation-delay-400">
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 text-gray-900 rounded-full focus:outline-none focus:ring-4 focus:ring-secondary/30 text-lg"
            />
            <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400">
              🔍
            </span>
          </div>
        </div>
      </section>

      {/* Quick Help Categories */}
      <section className="py-12 px-4 -mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-2xl text-center transition-all transform hover:-translate-y-1 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:shadow-md'
                }`}
              >
                <span className="text-3xl mb-2 block">{category.icon}</span>
                <span className="text-sm font-semibold">{category.name}</span>
                <span className={`text-xs block mt-1 ${
                  activeCategory === category.id ? 'text-white/80' : 'text-gray-400'
                }`}>
                  {category.count} articles
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Contact Options */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-primary-dark mb-4">Need Immediate Help?</h3>
                
                <div className="space-y-4">
                  <a href="mailto:support@theaterhub.com" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary-dark">Email Support</p>
                      <p className="text-sm text-gray-500">support@theaterhub.com</p>
                    </div>
                  </a>

                  <a href="tel:+251XXXXXXXXX" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary-dark">Call Us</p>
                      <p className="text-sm text-gray-500">+251-XXX-XXXXXX</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary-dark">Support Hours</p>
                      <p className="text-sm text-gray-500">Mon-Fri 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-secondary/10 rounded-xl">
                  <h4 className="font-semibold text-primary-dark mb-2">Live Chat</h4>
                  <p className="text-sm text-gray-600 mb-3">Chat with our support team for instant help</p>
                  <button className="w-full py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">
                    Start Chat
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Help Articles */}
            <div className="lg:col-span-2">
              {/* Featured Articles */}
              {searchTerm === '' && activeCategory === 'all' && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-primary-dark mb-4">Featured Articles</h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {featuredArticles.map((article) => (
                      <div key={article.id} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all">
                        <span className="text-3xl mb-2 block">{article.icon}</span>
                        <h3 className="font-semibold text-primary-dark mb-1">{article.title}</h3>
                        <p className="text-xs text-gray-500 mb-2">{article.views} views</p>
                        <button className="text-secondary text-sm font-semibold hover:underline">
                          Read More →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Search Results */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-primary-dark">
                    {searchTerm ? 'Search Results' : 'All Articles'}
                  </h2>
                  <p className="text-gray-500">{filteredArticles.length} articles</p>
                </div>

                {filteredArticles.length > 0 ? (
                  <div className="space-y-4">
                    {filteredArticles.map((article) => (
                      <details
                        key={article.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden group"
                        open={openFaq === article.id}
                      >
                        <summary
                          onClick={(e) => {
                            e.preventDefault()
                            setOpenFaq(openFaq === article.id ? null : article.id)
                          }}
                          className="flex items-center gap-4 p-6 cursor-pointer list-none hover:bg-gray-50"
                        >
                          <span className="text-3xl">{article.icon}</span>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-primary-dark">{article.title}</h3>
                            <p className="text-gray-600 text-sm">{article.description}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-400">👁️ {article.views}</span>
                            <span className={`transform transition-transform ${openFaq === article.id ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </div>
                        </summary>
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                          <div 
                            className="prose max-w-none text-gray-600"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                          />
                          <div className="mt-4 flex items-center gap-4">
                            <p className="text-sm text-gray-500">Was this helpful?</p>
                            <button className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm hover:bg-green-200">
                              👍 Yes ({article.helpful}%)
                            </button>
                            <button className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm hover:bg-red-200">
                              👎 No
                            </button>
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white rounded-2xl shadow-md">
                    <span className="text-6xl mb-4 block">🔍</span>
                    <h3 className="text-2xl font-bold text-primary-dark mb-2">No results found</h3>
                    <p className="text-gray-500 mb-4">We couldn't find any articles matching "{searchTerm}"</p>
                    <button
                      onClick={() => setSearchTerm('')}
                      className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark"
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </div>

              {/* Load More */}
              {filteredArticles.length > 0 && (
                <div className="text-center mt-8">
                  <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all">
                    Load More Articles
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Guides */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-dark text-center mb-12">Quick Start Guides</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'For First-Time Users',
                icon: '👋',
                steps: ['Create account', 'Browse events', 'Book tickets', 'Enjoy the show'],
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'For Theater Managers',
                icon: '🏛️',
                steps: ['Register theater', 'Set up seating', 'Create events', 'Track sales'],
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Payment Guide',
                icon: '💳',
                steps: ['Choose method', 'Enter details', 'Confirm payment', 'Get receipt'],
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Mobile App Tips',
                icon: '📱',
                steps: ['Download app', 'Sign in', 'Save tickets', 'Scan at venue'],
                color: 'from-orange-500 to-orange-600'
              }
            ].map((guide, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className={`w-16 h-16 bg-gradient-to-r ${guide.color} rounded-xl flex items-center justify-center mb-4 text-3xl`}>
                  {guide.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-4">{guide.title}</h3>
                <ol className="space-y-2">
                  {guide.steps.map((step, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <span className="w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help? */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-6xl mb-4 block">🤔</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl text-white/90 mb-8">
            Can't find what you're looking for? Our support team is here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-secondary text-gray-900 rounded-full font-semibold hover:bg-[#C4A030] transform hover:-translate-y-1 transition-all"
            >
              Contact Support
            </Link>
            <Link
              to="/faq"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transform hover:-translate-y-1 transition-all"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Help