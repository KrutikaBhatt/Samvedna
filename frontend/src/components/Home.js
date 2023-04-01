import React from "react";

export const Home = () => {
  return (
    <div class="sm:ml-64">
      <div className="px-8 pt-2">
        <textarea
          placeholder="type what's on your mind"
          name="post"
          id=""
          className="w-full"
          rows="4"></textarea>
      </div>
    </div>
  );
};
