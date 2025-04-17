import React, { useState } from 'react';
import './LikeButton.css'; // Import CSS for styling

function LikeButton({ isLiked: initialIsLiked, onLikeToggle }) {
  const [liked, setLiked] = useState(initialIsLiked);

  const handleClick = () => {
    setLiked(!liked);
    onLikeToggle(!liked); // Notify the parent component about the toggle
  };

  return (
    <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleClick}>
      {liked ? '❤️ Liked' : '🤍 Like'}
    </button>
  );
}

export default LikeButton;