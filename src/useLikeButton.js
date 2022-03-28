import { useState, useEffect } from "react";

function useLikeButton(article) {
  const [likes, setLikes] = useState(
    JSON.parse(localStorage.getItem(article)) || 0
  );
  function handleLikeClick() {
    setLikes((prevLikes) => prevLikes + 1);
  }
  useEffect(() => {
    localStorage.setItem(article, JSON.stringify(likes));
  }, [likes]);

  return { likes, handleLikeClick };
}

export default useLikeButton;
