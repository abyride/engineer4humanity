import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Header from '../../components/header';
import { useNavigate } from 'react-router-dom';
import { posts } from '../../stores/blogsData';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();  

  const blogPosts = posts.map((post)=>{
    return {
      ...post,
      date: new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
       description: post.content[0].text
    }
  })

  const categories = ['All', 'Construction Tips', 'Project Showcase', 'Safety First', 'Sustainability', 'Industry News', 'Client Stories'];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.slice(0, 2);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
<Header title="Blogs" path="Blog" />
      {/* Main Content */}
      <main className=" mx-auto px-4 py-16 sm:px-8 lg:px-16">
        {/* Featured Posts */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Featured Articles</h2>
            <div className="h-1 flex-grow ml-8 bg-gradient-to-r from-yellow-500 to-transparent"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-yellow-500 text-neutral-900 text-sm font-bold px-4 py-2 rounded-full">
                    Featured
                  </span>
                </div>
                <div className="p-8">
                  <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-neutral-900 group-hover:text-yellow-600 transition">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-neutral-900 transition-all duration-300 font-semibold">
                      Read More
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-yellow-500 text-neutral-900 shadow-lg scale-105'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border-2 border-neutral-200 hover:border-yellow-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-3 text-neutral-900 group-hover:text-yellow-600 transition line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-neutral-600 mb-4 text-sm line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-neutral-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <button 
                onClick={()=> navigate(`/blogs/${post.id}`)}
                className="flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition group-hover:gap-3">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-neutral-900 text-white px-10 py-4 rounded-full font-semibold hover:bg-yellow-500 hover:text-neutral-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Load More Articles
          </button>
        </div>
      </main>

      {/* Newsletter Section */}
      <div className="py-20 px-4 md:px-8 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Updated with<br />
            <span className="text-yellow-500">BuildGo Insights</span>
          </h2>
          <p className="text-xl text-neutral-300 mb-10">
            Subscribe to our newsletter and get the latest construction tips, project updates, 
            and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-neutral-900 focus:outline-none focus:ring-4 focus:ring-yellow-500"
            />
            <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-500 text-neutral-900 font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;