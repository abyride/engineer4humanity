  import { useEffect, useState } from 'react';
  import {
    User,
    Calendar,
    Share2,
    Facebook,
    Twitter,
    Linkedin,
    Link2,
    Check,
    ArrowRight,
    MessageCircle,
    HardHat,
    Clock
  } from 'lucide-react';
import { posts } from '../../stores/blogsData';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

  export default function BlogPostDetail() {

    const {id} = useParams()
    const navigate = useNavigate(); 

    const post =  posts.find(p => p.id == id) 

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      comment: ''
    });

    const [copied, setCopied] = useState(false);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your comment! It will be reviewed and published shortly.');
      setFormData({ name: '', email: '', comment: '' });
    };

    const handleCopyLink = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    const [relatedPosts,setRelatedPosts] =useState([]);
    const location = useLocation()
    

    const shareLinks = [
      { icon: Facebook, color: 'hover:bg-blue-600', label: 'Facebook' },
      { icon: Twitter, color: 'hover:bg-sky-500', label: 'Twitter' },
      { icon: Linkedin, color: 'hover:bg-blue-700', label: 'LinkedIn' },
      { icon: Link2, color: 'hover:bg-yellow-600', label: 'Copy Link', onClick: handleCopyLink }
    ];

    useEffect(()=>{
setRelatedPosts(posts.filter(p => p.id !== post.id).slice(0, 3).sort(() => 0.5 - Math.random()))
    },[location.pathname])

    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900">Blog post not found.</h2>
        </div>
      );
    }
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className=" mx-auto">
            <div className="mb-6">
              <button 
                onClick={() => window.history.back()}
                className="text-gray-400 hover:text-yellow-500 transition flex items-center gap-2"
              >
                <ArrowRight className="rotate-180" size={20} />
                Back to Blog
              </button>
            </div>
            
            <header className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-5 py-2 bg-yellow-500/20 border border-yellow-500/30 text-yellow-500 text-sm font-bold rounded-full mb-6">
                {post?.category}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
                <div className="flex items-center gap-3">
                  <User size={18} className="text-yellow-500" />
                  <div className="text-left">
                    <p className="font-semibold text-white">{post.author}</p>
                    <p className="text-sm text-gray-400">{post.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-yellow-500" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-yellow-500" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>
          </div>
        </div>

        <div className=" mx-auto px-6 py-12 lg:px-8 xl:px-12">
          <div className="grid xl:grid-cols-4 gap-10">
            {/* Main Content */}
            <article className="xl:col-span-3">
              {/* Featured Image */}
              <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <p className="text-white text-sm opacity-90">Modern construction site utilizing advanced building techniques</p>
                </div>
              </div>

              {/* Share Section */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-8 border-b border-gray-200">
                <span className="text-gray-700 font-bold flex items-center gap-2">
                  <Share2 size={20} /> Share This Article:
                </span>
                <div className="flex gap-3">
                  {shareLinks.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <button
                        key={i}
                        onClick={social.onClick || (() => alert(`Shared on ${social.label}`))}
                        className={`w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center transition-all ${social.color} shadow-lg hover:scale-110`}
                      >
                        {social.label === 'Copy Link' && copied ? <Check size={20} /> : <Icon size={20} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-10">
                {post.content.map((section, i) => (
                  <div key={i}>

                   
                    {section.type === 'intro' && (
                      <p className=" text-gray-800 font-medium leading-relaxed bg-yellow-50 p-6 rounded-2xl border-l-4 border-yellow-500">
                        {section.text}
                      </p>
                    )}
                    {section.type === 'section' && (
                      <>
                        <h2 className="text-2xl font-bold text-gray-900 mb-5 mt-12 flex items-center gap-3">
                          <HardHat className="text-yellow-600" size={28} />
                          {section.heading}
                        </h2>
                        <p className="text-gray-600">{section.text}</p>
                      </>
                    )}
                    {section.type === 'quote' && (
                      <blockquote className="border-l-4  border-yellow-600 pl-6 py-4 my-12 bg-yellow-50 rounded-r-lg italic  text-gray-800">
                        {section.text}
                        <footer className="mt-4 text-yellow-700 font-bold not-italic">
                          {section.author}
                        </footer>
                      </blockquote>
                    )}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="my-12">
                <span className="text-gray-700 font-bold mr-4">Tags:</span>
                <div className="inline-flex flex-wrap gap-3 mt-3">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-yellow-100 hover:text-yellow-700 transition cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Comment Section */}
              <section className="bg-white  rounded-3xl p-10 shadow-xl border text-black border-gray-100 mt-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <MessageCircle className="text-yellow-600" size={32} />
                  Leave a Comment
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  We'd love to hear your thoughts on this article. Share your experience or ask questions below.
                </p>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email *"
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition"
                    />
                  </div>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}

                    rows={6}
                    placeholder="Your comment or question..."
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition resize-none"
                  />
                  <button
                    onClick={handleSubmit}
                    className="px-10 py-4 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-yellow-500 hover:to-yellow-500 hover:text-gray-900 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Submit Comment
                  </button>
                </div>
              </section>
            </article>

            {/* Sidebar - Related Articles */}
            <aside className="xl:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
                <div className="space-y-8">
                  {relatedPosts.map((blog) => (
                    <div
                      key={blog.id}
                      onClick={()=> navigate(`/blogs/${blog.id}`)}
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-xs font-bold text-yellow-600">{blog.category}</span>
                        <h4 className="text-lg font-bold text-gray-900 mt-3 mb-2 line-clamp-2 group-hover:text-yellow-600 transition">
                          {blog.title}
                        </h4>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-gray-500">
                            <Calendar size={14} />
                            <span>{blog.date}</span>
                          </div>
                          <ArrowRight size={18} className="text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-2 transition-all" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Box */}
                <div className="mt-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                  <h4 className="text-2xl font-bold mb-4">Start Your Project</h4>
                  <p className="text-gray-300 mb-6">
                    Ready to build your dream? Let's discuss your project today.
                  </p>
                  <button className="w-full px-6 py-3 bg-yellow-500 hover:bg-yellow-500 text-gray-900 font-bold rounded-full transition-all shadow-lg hover:shadow-xl">
                    Get Started
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  }