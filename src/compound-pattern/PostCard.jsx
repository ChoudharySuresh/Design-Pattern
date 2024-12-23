import React, { createContext, useContext } from "react";

const PostCardContext = createContext(null);

function usePostCardContext() {
  const context = useContext(PostCardContext);
  if (!context) {
    throw new Error("usePostCardContext Must be within a postcard");
  }
  return context;
}
const PostCard = ({ post, children }) => {
  return (
    <PostCardContext.Provider value={{ post }}>
      {children}
    </PostCardContext.Provider>
  );
};

export default PostCard;

PostCard.Title = function PostCardTitle() {
  const { post } = usePostCardContext();
  return <h2>{post.title}</h2>;
};
PostCard.Content = function PostCardContent() {
  const { post } = usePostCardContext();
  return <p>{post.content}</p>;
};
PostCard.User = function PostCardUser() {
  const { post } = usePostCardContext();
  return <p>{post.user.name}</p>;
};

PostCard.Buttons = function PostCardButtons() {
  return (
    <div>
      <button style={{ margin: "0 2rem" }}>Read More</button>
      <button>Comments</button>
    </div>
  );
};
