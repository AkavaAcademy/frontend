import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { blogsAPI } from '../services/api';

interface Blog {
  id: number;
  title: string;
  date: string;
  author: string;
  summary: string;
  content?: string;
  image_url?: string;
}

const BlogComponent: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await blogsAPI.getAll();
        setBlogs(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch blog posts');
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-600 mb-4">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Blog: <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">IT Education in Schools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore articles, stories, and tips about the role of technology and coding in modern education.
          </p>
        </motion.div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow"
            >
              {post.image_url && (
                <img src={post.image_url} alt={post.title} className="w-full h-40 object-cover rounded-lg mb-4 shadow-sm" />
              )}
              <h3 className="text-2xl font-semibold text-primary-700 mb-2">{post.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
              </div>
              <p className="text-gray-700 text-base mb-2 flex-1">{post.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogComponent; 