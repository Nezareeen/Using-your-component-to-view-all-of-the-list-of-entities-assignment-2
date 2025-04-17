import React from 'react';
import LikeButton from './likebutton';
import './PostCard.css';

function PostCard({ post }) {
  const handleLikeToggle = (isCurrentlyLiked) => {
    console.log(`Post ${post.id} liked state changed to:`, isCurrentlyLiked);
  };

  return (
    <div className="postcard">
      <div className="postcard-header">
        <img
          src={post.profileImage}
          alt={`${post.username}'s profile`}
          className="profile-image"
        />
        <span className="username">{post.username}</span>
      </div>
      <p className="content">{post.content}</p>
      <div className="postcard-actions">
        <LikeButton isLiked={post.isLiked} onLikeToggle={handleLikeToggle} />
      </div>
    </div>
  );
}

export default PostCard;