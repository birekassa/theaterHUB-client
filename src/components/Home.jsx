import { useState } from 'react'

function Home() {
  // State for search/filter functionality
  const [searchTerm, setSearchTerm] = useState('')
  const [filterBy, setFilterBy] = useState('newest')

  // Sample events data
  const events = [
    {
      id: 1,
      title: 'The Lion King',
      theater: 'National Theater',
      date: 'March 15-30, 2026',
      price: '500',
      icon: '🎬',
      category: 'Musical'
    },
    {
      id: 2,
      title: 'Hamlet',
      theater: 'City Theater',
      date: 'April 5-20, 2026',
      price: '350',
      icon: '🎭',
      category: 'Drama'
    },
    {
      id: 3,
      title: 'Cirque Dreams',
      theater: 'Grand Arena',
      date: 'March 10-25, 2026',
      price: '600',
      icon: '🎪',
      category: 'Circus'
    },
    {
      id: 4,
      title: 'Music of the Night',
      theater: 'Concert Hall',
      date: 'April 12-18, 2026',
      price: '450',
      icon: '🎻',
      category: 'Concert'
    },
    {
      id: 5,
      title: 'The Comedy Night',
      theater: 'Laugh Factory',
      date: 'March 22-28, 2026',
      price: '300',
      icon: '😂',
      category: 'Comedy'
    },
    {
      id: 6,
      title: 'Ballet: Swan Lake',
      theater: 'Opera House',
      date: 'April 8-15, 2026',
      price: '550',
      icon: '🩰',
      category: 'Dance'
    },
    {
      id: 7,
      title: 'The Phantom',
      theater: 'Royal Theater',
      date: 'March 18-25, 2026',
      price: '480',
      icon: '👻',
      category: 'Musical'
    },
    {
      id: 8,
      title: 'Jazz Festival',
      theater: 'City Hall',
      date: 'April 1-5, 2026',
      price: '400',
      icon: '🎷',
      category: 'Music'
    }
  ]

  // Filter events based on search term
  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.theater.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2C1810] to-primary min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 15 L61 40 L88 44 L67 62 L72 90 L50 76 L28 90 L33 62 L12 44 L39 40 Z" fill="%23D4AF37"/></svg>')`,
               backgroundSize: '100px'
             }}>
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeInUp">
            Welcome to <span className="text-secondary relative inline-block">
              TheaterHub
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary animate-slideIn"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-2 animate-fadeInUp animation-delay-200">
            Your Centralized Ticketing and Seat Reservation Platform
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 animate-fadeInUp animation-delay-400">
            Discover, Book, and Experience the Magic of Live Theater
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-600">
            <button className="px-8 py-3 bg-secondary text-gray-900 rounded-full font-semibold hover:bg-[#C4A030] transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl">
              Browse Shows
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transform hover:-translate-y-1 transition-all">
              Register Theater
            </button>
          </div>
        </div>
      </section>

      {/* All Events Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4 relative inline-block">
              All Events
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary"></span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover amazing performances near you
            </p>
          </div>

          {/* Filter Section */}
          <div className="mb-12">
            {/* Search Box */}
            <div className="relative max-w-md mx-auto mb-6">
              <input
                type="text"
                placeholder="Search by event title, theater, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-400">
                🔍
              </span>
            </div>

            {/* Filter Options */}
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="w-full md:w-auto px-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-primary bg-white"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>

              <div className="flex gap-2 flex-wrap justify-center">
                {['All', 'Today', 'This Week', 'This Month'].map((filter) => (
                  <button
                    key={filter}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      filter === 'All'
                        ? 'bg-primary text-white'
                        : 'border-2 border-gray-200 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all">
                  <div className="h-48 bg-gradient-to-r from-[#2C1810] to-primary flex items-center justify-center text-6xl text-secondary relative">
                    <span className="absolute top-3 left-3 bg-secondary text-gray-900 px-2 py-1 rounded-full text-xs font-semibold">
                      {event.category}
                    </span>
                    {event.icon}
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-primary-dark mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-1 flex items-center gap-1">
                      <span>📍</span> {event.theater}
                    </p>
                    <p className="text-gray-500 text-sm mb-2 flex items-center gap-1">
                      <span>📅</span> {event.date}
                    </p>
                    <p className="text-accent font-bold text-lg mb-4">
                      From {event.price} ETB
                    </p>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors font-medium">
                        Book Now
                      </button>
                      <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors text-xl">
                        ❤️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-md max-w-md mx-auto">
              <p className="text-gray-500 text-lg mb-4">No events found matching "{searchTerm}"</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="px-6 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors font-medium"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
              Load More Events
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4 relative inline-block">
            How It Works
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary"></span>
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Four simple steps to your theater experience
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Browse Shows', desc: 'Explore upcoming performances at your favorite theaters' },
              { num: '2', title: 'Select Seats', desc: 'Choose your seats from our interactive theater map' },
              { num: '3', title: 'Make Payment', desc: 'Pay securely using mobile money or card' },
              { num: '4', title: 'Get Tickets', desc: 'Receive your QR code tickets via email and SMS' }
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss a Show</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Subscribe to our newsletter for exclusive offers and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="px-8 py-3 bg-secondary text-gray-900 rounded-full font-semibold hover:bg-[#C4A030] transform hover:-translate-y-1 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home