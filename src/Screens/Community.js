import React, { useState, useEffect } from 'react';
import axios from 'axios';
import B_URL from '../Services/Api';
import './comunity.css';



const Community = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('access');

  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch all posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${B_URL}/api/community/posts/`);
      setPosts(response.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Unable to fetch posts.");
    }
  };

  // Handle post creation
  const handleCreatePost = async (e) => {
    e.preventDefault();

    if (!userId) {
      setError("You must be logged in to post.");
      return;
    }

    const token = localStorage.getItem('access');
    if (!token) {
      setError('You must be logged in to post.');
      return;
    }

    setLoading(true);
    setError('');

    const postData = {
      title,
      content,
      author: userId
    };

    try {
      await axios.post(`${B_URL}/api/community/posts/`, postData, {
        headers: {
          Authorization: `Bearer ${token}`, // Make sure the token is correct
          'Content-Type': 'application/json',
        }
      });
      setTitle('');
      setContent('');
      fetchPosts(); // Refresh the list of posts
      alert('Post created successfully!');
    } catch (err) {
      console.error("Error creating post:", err);
      if (err.response?.status === 401) {
        setError('Unauthorized: Please log in again.');
      } else {
        setError('Failed to create post.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle giving a star to a post
  const handleGiveStar = async (postId) => {
    try {
      await axios.post(`${B_URL}/api/community/posts/${postId}/star/`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      fetchPosts(); // Refresh posts to update star count
      alert('Star given!');
    } catch (err) {
      console.error("Error giving star:", err);
      setError("Failed to give a star.");
    }
  };

  return (

    <div className="community-container" >
      <div className="post-form">
        <h2>Create a Post</h2>
        {/* Display errors if any */}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Form to create a new post */}
        <form onSubmit={handleCreatePost}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Post Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Share your findings or ask a question..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Posting...' : 'Post'}
          </button>
        </form>
      </div>

      {/* Display all community posts */}
      <div className="posts-section">
        <h2 style={{ backgroundColor: '#0000FF', color: 'white', padding: '10px', textAlign: 'center' }}>Community Posts</h2>
        <div className="posts-list" style={{  padding: '20px' }}>
          {posts.map((post) => (
            <div className="post-card" key={post.id}>
              <div className="post-content">
                <h5 className="post-title">{post.title}</h5>
                <p>{post.content}</p>
              </div>
              <div className="post-footer">
                <small>Stars: {post.stars_count}</small>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => handleGiveStar(post.id)}
                >
                  Give Star
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
