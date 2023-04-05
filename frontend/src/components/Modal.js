import axios from "axios";
import React, { useState } from "react";

export const Modal = ({
  openModal,
  setOpenModal,
  comment,
  setComment,
  postId,
  userId,
  userName,
}) => {
  const addComment = async () => {
    console.log(comment);
    const data = {
      text: comment,
      post_id: postId,
      created_by: userId,
      author: userName,
    };
    const count_data = {
      author: userName,
    };
    console.log(count_data);
    const resCount = await axios.post(
      "http://localhost:8080/comment/getCommentByAuthor",
      count_data
    );
    console.log("this is the res count");
    console.log(resCount);
    const res = await axios.post(
      "http://localhost:8080/comment/createComment",
      data
    );
    console.log(res.data);
    setOpenModal(false);
  };

  return (
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      className={` ${
        !openModal && "hidden"
      } fixed  top-30  z-50  w-full p-4 overflow-x-hidden overflow-y-auto `}>
      <div class="relative w-full h-full max-w-2xl md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Add a reply
            </h3>
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal">
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>

          <div class="p-6 space-y-6">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your message
            </label>
            <textarea
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."></textarea>
          </div>

          <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="defaultModal"
              type="button"
              onClick={addComment}
              disabled={!userId}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 disabled:bg-gray-600 disabled:hover:bg-gray-600 disabled:cursor-not-allowed">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
