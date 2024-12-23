import React from "react";
import PostCard from "./PostCard";

const CompoundPattern = () => {
  return (
    <div>
      <PostCard
        post={{
          id: 1,
          title: "Hello World",
          content: "This is the first post on our blog",
          user: {
            id: 1,
            name: "John Doe",
          },
        }}
      >
        <PostCard.Title />
        <PostCard.Content />
        <PostCard.User />
        <PostCard.Buttons />
      </PostCard>
    </div>
  );
};

export default CompoundPattern;
