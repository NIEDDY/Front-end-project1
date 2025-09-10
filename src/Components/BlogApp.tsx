import React, { useState, useMemo } from 'react';
import { Search, Calendar, User, MessageCircle, Heart, Eye } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  categories: string[];
  views: number;
  likes: number;
  comments: number;
}

interface Comment {
  id: number;
  postId: number;
  author: string;
  content: string;
  date: string;
}

const BlogApp: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'recent' | 'popular' | 'comments'>('recent');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Do you Have A Passion for Photography",
      excerpt: "Sed velit mattis ipsum mi, quam turpis porttitor duis, ipsum fusce congue at, etiam sit nec erat. Massa ut in risus mi, dictum nam odio elementum, massa amet et libero...",
      author: "Martin Gray",
      date: "May 31, 2019",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=250&fit=crop",
      categories: ["BEAUTY", "LIFESTYLE"],
      views: 1250,
      likes: 89,
      comments: 15
    },
    {
      id: 2,
      title: "Notify What Makes You Happy, Smile More!",
      excerpt: "Sed velit mattis ipsum mi, quam turpis porttitor duis, ipsum fusce congue at, etiam sit nec erat. Massa ut in risus mi, dictum nam odio elementum, massa amet et libero...",
      author: "Martin Gray",
      date: "May 30, 2019",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop",
      categories: ["LIFESTYLE", "TRAVEL"],
      views: 2100,
      likes: 156,
      comments: 23
    },
    {
      id: 3,
      title: "Fashion Elements In This Right Summer",
      excerpt: "Discover the latest fashion trends that will make your summer wardrobe stand out with vibrant colors and comfortable styles...",
      author: "Sarah Johnson",
      date: "May 27, 2019",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=250&fit=crop",
      categories: ["FASHION", "LIFESTYLE"],
      views: 850,
      likes: 67,
      comments: 12
    },
    {
      id: 4,
      title: "Understanding My Brand, I Go Beyond The Surface",
      excerpt: "Building a personal brand goes deeper than just aesthetics. It's about creating authentic connections and meaningful experiences...",
      author: "David Chen",
      date: "May 24, 2019",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      categories: ["BUSINESS", "BRANDING"],
      views: 1800,
      likes: 134,
      comments: 28
    },
    {
      id: 5,
      title: "The Art of Minimalist Living",
      excerpt: "Embracing simplicity in our daily lives can lead to greater happiness and reduced stress. Learn how to declutter your space and mind...",
      author: "Emma Wilson",
      date: "May 20, 2019",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop",
      categories: ["LIFESTYLE", "WELLNESS"],
      views: 3200,
      likes: 245,
      comments: 41
    },
    {
      id: 6,
      title: "Digital Marketing Trends for 2019",
      excerpt: "Stay ahead of the curve with these emerging digital marketing strategies that are reshaping how brands connect with their audiences...",
      author: "Michael Rodriguez",
      date: "May 15, 2019",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
      categories: ["MARKETING", "DIGITAL"],
      views: 2800,
      likes: 189,
      comments: 35
    }
  ];

  const comments: Comment[] = [
    { id: 1, postId: 1, author: "Alice Brown", content: "Great tips for aspiring photographers!", date: "June 1, 2019" },
    { id: 2, postId: 2, author: "John Smith", content: "This really made me smile today!", date: "May 31, 2019" },
    { id: 3, postId: 4, author: "Lisa Wang", content: "Excellent insights on personal branding.", date: "May 25, 2019" },
    { id: 4, postId: 5, author: "Tom Johnson", content: "Minimalism changed my life!", date: "May 21, 2019" },
    { id: 5, postId: 6, author: "Sarah Kim", content: "Very informative marketing strategies.", date: "May 16, 2019" }
  ];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  const getSidebarContent = () => {
    switch (activeTab) {
      case 'recent':
        return blogPosts
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 4);
      case 'popular':
        return blogPosts
          .sort((a, b) => b.views - a.views)
          .slice(0, 4);
      case 'comments':
        return comments.slice(0, 5);
      default:
        return [];
    }
  };

  const CategoryTag: React.FC<{ category: string }> = ({ category }) => (
    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mr-2 mb-2">
      {category}
    </span>
  );

  const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4">
          {post.categories.map(category => (
            <CategoryTag key={category} category={category} />
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {post.date}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            CONTINUE READING
          </button>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {post.views}
            </div>
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              {post.likes}
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-1" />
              {post.comments}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SidebarPost: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
          {post.title}
        </h4>
        <p className="text-xs text-gray-500">{post.date}</p>
      </div>
    </div>
  );

  const SidebarComment: React.FC<{ comment: Comment }> = ({ comment }) => {
    const post = blogPosts.find(p => p.id === comment.postId);
    return (
      <div className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
        <p className="text-sm text-gray-700 mb-2">"{comment.content}"</p>
        <div className="flex justify-between text-xs text-gray-500">
          <span>by {comment.author}</span>
          <span>on "{post?.title.slice(0, 20)}..."</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Our Blog</h1>
          <nav className="text-sm text-gray-500">
            <span>Home</span> / <span>Blog</span>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Search */}
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Tabs */}
              <div className="bg-white rounded-lg shadow">
                <div className="flex border-b">
                  {[
                    { key: 'recent', label: 'Recent' },
                    { key: 'popular', label: 'Popular' },
                    { key: 'comments', label: 'Comments' }
                  ].map(tab => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key as any)}
                      className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                        activeTab === tab.key
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-4">
              {activeTab === 'comments' ? (
                <div className="space-y-2">
                  {(getSidebarContent() as Comment[]).map(comment => (
                    <SidebarComment key={comment.id} comment={comment} />
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {(getSidebarContent() as BlogPost[]).map(post => (
                    <SidebarPost key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default BlogApp;
