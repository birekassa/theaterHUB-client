import { useState } from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  // Contact information from your project
  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      details: ['info@theaterhub.com', 'support@theaterhub.com'],
      action: 'Send us an email',
      link: 'mailto:info@theaterhub.com'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+251-XXX-XXXXXX', '+251-XXX-XXXXXX'],
      action: 'Mon-Fri 9:00 - 18:00',
      link: 'tel:+251XXXXXXXXX'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['Addisabeba Ethiopia', 'meksiko '],
      action: 'Get directions',
      link: 'https://maps.google.com'
    },
    {
      icon: '⏰',
      title: 'Office Hours',
      details: ['Monday - Friday', '9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
      action: 'Sunday: Closed',
      link: '#'
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
              Contact <span className="text-secondary">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fadeInUp animation-delay-200">
              Get in touch with the TheaterHub team
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto animate-slideIn"></div>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16 px-4 -mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all group"
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm mb-1">{detail}</p>
                ))}
                <p className="text-secondary font-semibold text-sm mt-3 group-hover:underline">
                  {item.action} →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary-dark mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-primary-dark mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="give a title to your message"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-primary text-white rounded-xl font-semibold transition-all transform hover:-translate-y-1 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-dark hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                    <p className="text-green-600 text-center font-medium">
                      ✓ Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Map / Location */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg h-full">
                <h3 className="text-2xl font-bold text-primary-dark mb-6">Our Location</h3>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl block mb-4">🏛️</span>
                    <p className="text-primary-dark font-semibold">addisabeba ,Ethiopia</p>
                    <p className="text-gray-600">4 kilo</p>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-white rounded-xl">
                    <span className="text-3xl block mb-2">📞</span>
                    <p className="text-sm font-semibold text-primary-dark">Response Time</p>
                    <p className="text-xs text-gray-500">Within 24 hours</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl">
                    <span className="text-3xl block mb-2">🌍</span>
                    <p className="text-sm font-semibold text-primary-dark">Support</p>
                    <p className="text-xs text-gray-500">English & Amharic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Social Media Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Connect With Us
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Follow us on social media for updates and announcements
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: '📘', name: 'Facebook', color: 'hover:bg-[#1877f2]' },
              { icon: '🐦', name: 'Twitter', color: 'hover:bg-[#1da1f2]' },
              { icon: '📷', name: 'Instagram', color: 'hover:bg-[#e4405f]' },
              { icon: '🎬', name: 'TikTok', color: 'hover:bg-[#000000]' },
              { icon: '💼', name: 'LinkedIn', color: 'hover:bg-[#0a66c2]' },
              { icon: '▶️', name: 'YouTube', color: 'hover:bg-[#ff0000]' }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className={`group flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:shadow-xl transform hover:-translate-y-2 transition-all ${social.color} hover:text-white`}
              >
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {social.icon}
                </span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-white">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Browse events, register your theater, or start booking tickets today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="px-8 py-3 bg-secondary text-gray-900 rounded-full font-semibold hover:bg-[#C4A030] transform hover:-translate-y-1 transition-all shadow-lg"
            >
              Browse Events
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transform hover:-translate-y-1 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact