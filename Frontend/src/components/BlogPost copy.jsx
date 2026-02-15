import { useState } from 'react'

function BlogPost({ blogId }) {
  const [comment, setComment] = useState('')
  const [liked, setLiked] = useState(false)

  // Sample blog post (in real app, fetch by ID)
  const blog = {
    id: 1,
    title: "The Magic of Live Theater: Why Nothing Compares",
    content: `
      <p>In an age of streaming services and on-demand entertainment, live theater stands as a testament to the irreplaceable power of human connection. There's something magical about sharing a space with performers and fellow audience members that no screen can replicate.</p>
      
      <h2>The Energy of Live Performance</h2>
      <p>When you're in a theater, every performance is unique. Actors feed off the audience's energy, and no two shows are ever exactly the same. That laugh you hear? It's genuine. That gasp? Shared by hundreds around you.</p>
      
      <h2>Creating Memories</h2>
      <p>Theater creates lasting memories. The set design, the lighting, the costumes, and most importantly, the emotion – these elements combine to create experiences that stay with you long after the curtain falls.</p>
      
      <h2>Supporting Local Arts</h2>
      <p>By attending live performances, you're not just entertaining yourself – you're supporting artists, designers, musicians, and countless others who bring stories to life on stage.</p>
    `,
    author: "Sarah Johnson",
    date: "March 10, 2026",
    category: "Theater Insights",
    image: "🎭",
    readTime: "5 min read",
    likes: 234,
    comments: [
      { id: 1, user: "John D.", text: "Beautifully written! This captures exactly why I love theater.", date: "March 11, 2026" },
      { id: 2, user: "Mary A.", text: "Nothing beats the thrill of live performance!", date: "March 11, 2026" }
    ],
    relatedPosts: [2, 3, 5]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-secondary text-primary-dark px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {blog.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>
          <div className="flex items-center justify-center gap-6 text-white/90">
            <span className="flex items-center gap-2">👤 {blog.author}</span>
            <span className="flex items-center gap-2">📅 {blog.date}</span>
            <span className="flex items-center gap-2">⏱️ {blog.readTime}</span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Featured Image/Icon */}
          <div className="text-9xl text-center mb-8 bg-gradient-to-r from-primary/10 to-secondary/10 py-12 rounded-2xl">
            {blog.image}
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: blog.content }} />

          {/* Engagement Section */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                    liked 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-red-100'
                  }`}
                >
                  <span>{liked ? '❤️' : '🤍'}</span>
                  <span>{blog.likes + (liked ? 1 : 0)}</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full hover:bg-primary/10 transition-colors">
                  <span>💬</span> Comment
                </button>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-all">
                <span>📤</span> Share
              </button>
            </div>

            {/* Comments Section */}
            <div>
              <h3 className="text-2xl font-bold text-primary-dark mb-6">Comments ({blog.comments.length})</h3>
              
              {/* Add Comment */}
              <div className="flex gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">
                  👤
                </div>
                <div className="flex-1">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary"
                    rows="3"
                  />
                  <button className="mt-2 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">
                    Post Comment
                  </button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {blog.comments.map((c) => (
                  <div key={c.id} className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                      👤
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-primary-dark">{c.user}</span>
                          <span className="text-sm text-gray-500">{c.date}</span>
                        </div>
                        <p className="text-gray-700">{c.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-dark text-center mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Related posts would be mapped here */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all">
              <span className="text-4xl block mb-4">🎪</span>
              <h3 className="text-xl font-bold text-primary-dark mb-2">Behind the Scenes</h3>
              <p className="text-gray-600 mb-4">An exclusive look at theater production...</p>
              <button className="text-primary font-semibold hover:text-secondary">Read More →</button>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all">
              <span className="text-4xl block mb-4">📋</span>
              <h3 className="text-xl font-bold text-primary-dark mb-2">Top Shows This Spring</h3>
              <p className="text-gray-600 mb-4">Must-see performances this season...</p>
              <button className="text-primary font-semibold hover:text-secondary">Read More →</button>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all">
              <span className="text-4xl block mb-4">📚</span>
              <h3 className="text-xl font-bold text-primary-dark mb-2">Ethiopian Theater History</h3>
              <p className="text-gray-600 mb-4">The rich heritage of local performances...</p>
              <button className="text-primary font-semibold hover:text-secondary">Read More →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPost