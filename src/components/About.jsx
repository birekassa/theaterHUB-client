import { Link } from 'react-router-dom'

function About() {
  // Team members data from your project document
  const teamMembers = [
    {
      id: 1,
      name: 'Birehanu Kassa',
      idNumber: 'MTUUR/3989/14',
      role: 'Team Leader & System Analyst',
      description: 'Leading the project vision and requirements analysis',
      icon: '👨‍💻',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      name: 'Gebreslassie Dessie',
      idNumber: 'MTUUR/1440/14',
      role: 'Backend Developer',
      description: 'Server-side logic, APIs, and system integration',
      icon: '⚙️',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      name: 'Gemechis Debelo',
      idNumber: 'MTUUR/1463/14',
      role: 'Frontend Developer',
      description: 'User interface design and client-side development',
      icon: '🎨',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      name: 'Lelisa Abreham',
      idNumber: 'MTUUR/1969/14',
      role: 'Database Designer & Tester',
      description: 'Database design and system testing',
      icon: '🗄️',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  // Project milestones
  const milestones = [
    {
      year: '2025',
      title: 'Project Initiation',
      description: 'Requirements gathering and feasibility analysis'
    },
    {
      year: '2025',
      title: 'System Design',
      description: 'Architecture design and prototyping'
    },
    {
      year: '2026',
      title: 'Development',
      description: 'Frontend and backend implementation'
    },
    {
      year: '2026',
      title: 'Testing & Deployment',
      description: 'Quality assurance and launch'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-dark to-primary text-white overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 15 L61 40 L88 44 L67 62 L72 90 L50 76 L28 90 L33 62 L12 44 L39 40 Z" fill="%23D4AF37"/></svg>')`,
            backgroundSize: '100px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
              About <span className="text-secondary">TheaterHub</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fadeInUp animation-delay-200">
              Revolutionizing theater ticketing in Ethiopia
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto animate-slideIn"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To modernize theater operations and enhance audience engagement by providing 
                a centralized, user-friendly platform that streamlines ticketing, seat 
                reservations, and event management for theaters across Ethiopia.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">👁️</span>
              </div>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become Ethiopia's leading digital ecosystem for performing arts, 
                connecting audiences with unforgettable theater experiences while 
                empowering venue managers with cutting-edge tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-12">
            TheaterHub Overview
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              TheaterHub is a Centralized Ticketing and Seat Reservation Platform designed 
              to streamline and modernize the process of managing theater events, ticket 
              sales, and seat reservations across multiple venues in Ethiopia.
            </p>
            
            <p className="mb-6">
              The platform provides a unified system where customers can browse events, 
              view real-time seat availability, reserve seats, and securely purchase 
              tickets online, while theater administrators can efficiently manage 
              schedules, pricing, seating layouts, and sales reports.
            </p>
            
            <div className="bg-primary/5 p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold text-primary-dark mb-4">Key Features:</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Centralized event discovery
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Real-time seat selection
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Secure payment processing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Digital QR code tickets
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Multi-theater support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✓</span> Analytics and reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">
            Group Three (3) - Department of Software Engineering
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all">
                  {/* Header with gradient */}
                  <div className={`h-24 bg-gradient-to-r ${member.color} relative`}>
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                      <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                        <div className={`w-full h-full rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-4xl`}>
                          {member.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-16 p-6 text-center">
                    <h3 className="text-xl font-bold text-primary-dark mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {member.idNumber}
                    </p>
                    <p className="text-secondary font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Supervisor */}
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience TheaterHub?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join us in revolutionizing the theater experience in Ethiopia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="px-8 py-3 bg-secondary text-gray-900 rounded-full font-semibold hover:bg-[#C4A030] transform hover:-translate-y-1 transition-all shadow-lg"
            >
              Browse Events
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transform hover:-translate-y-1 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About