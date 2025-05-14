import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked); // toggle between true and false
  };

  return <button onClick={toggleLike}>{liked ? "❤️ Liked" : "🤍 Like"}</button>;
};

export default LikeButton;
