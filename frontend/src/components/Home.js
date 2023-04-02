import axios from "axios";
import React, { useEffect, useState } from "react";
import qs from "qs";
import { TopSection } from "./TopSection";

import { Modal } from "./Modal";
import { Post } from "./Post";
import Tag from "./Tag";

export const Home = ({ userId, userName, contract }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [comment, setComment] = useState("");
  const [reloadPost, setReloadPost] = useState(false);
  const [addTag, setAddTag] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const tags = ["adhd", "anxiety", "depression", "suicide"];

  const openModalFunc = (index) => {
    setIndex(index);
    setOpenModal(!openModal);
    console.log("This is the index that was clicked");
    console.log(index);
  };

  // const posts = [
  //   {
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  //     author: "Michael Gough",
  //     created_at: "15/02/2022",
  //     comments: [
  //       {
  //         text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  //         author: "Jese Leos",
  //         created_at: "15/02/2022",
  //       },
  //       {
  //         text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  //         author: "Jese Leos",
  //         created_at: "15/02/2022",
  //       },
  //       {
  //         text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  //         author: "Jese Leos",
  //         created_at: "15/02/2022",
  //       },
  //     ],
  //   },
  //   {
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  //     author: "Michael Gough",
  //     created_at: "15/02/2022",
  //     comments: [
  //       {
  //         text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  //         author: "Jese Leos",
  //         created_at: "15/02/2022",
  //       },
  //     ],
  //   },
  //   {
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  //     author: "Michael Gough",
  //     created_at: "15/02/2022",
  //     comments: [
  //       {
  //         text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  //         author: "Jese Leos",
  //         created_at: "15/02/2022",
  //       },
  //     ],
  //   },
  // ];

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const count_data = {
      author: userId,
    };
    console.log("this is the count data");
    console.log(count_data);
    const post_count = await axios.post(
      "http://localhost:8080/post/getPostCount",
      count_data
    );
    console.log("after fetching");
    console.log(post_count.data);
    if (post_count.data.data == 0) {
      const post_data = {
        name: userName,
        id: userId,
      };
      const post_link = await axios.post(
        "http://localhost:8080/user/addReward",
        post_data
      );
      console.log("this is the post link");
      console.log(post_link.data);
    }
    // const prediction = await axios.post(
    //   "http://localhost:5000/predict",
    //   qs.stringify({
    //     text: postText,
    //   })
    // );
    // console.log(prediction.data);
    const data = {
      title,
      description: postText,
      user_id: userId,
      // tag: prediction.data,
    };
    const res = await axios.post("http://localhost:8080/post/createPost", data);
    console.log(res.data);
    setTitle("");
    setPostText("");
    setReloadPost(!reloadPost);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/post/getposts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
      setFilteredPosts(res.data);
    });
  }, [reloadPost]);

  useEffect(() => {
    if (selectedTags.length == 0) {
      console.log("no tag");
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => selectedTags.includes(post.tag)));
      console.log(filteredPosts);
    }
  }, [selectedTags]);

  return (
    <div class="sm:ml-64">
      <TopSection />
      <section class="bg-white dark:bg-gray-900 py-8 lg:py-16">
        <div class="max-w-2xl mx-auto px-4">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Add Post
            </h2>
          </div>

          <form class="mb-6 w-full relative" onSubmit={handlePostSubmit}>
            <Modal
              openModal={openModal}
              setOpenModal={setOpenModal}
              comment={comment}
              setComment={setComment}
              postId={posts[index]?.post_id}
              userId={userId}
              userName={userName}
            />

            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="p-4 w-full h-12 text-sm rounded-lg rounded-t-lg border border-gray-200 text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Title"
            />

            <div class="py-2 px-4 mb-4 mt-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label for="post" class="sr-only">
                Your post
              </label>
              <textarea
                id="post"
                rows="6"
                class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Add a post ......"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                required></textarea>
            </div>
            <button
              disabled={!userId}
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block m-auto disabled:bg-gray-600 disabled:cursor-not-allowed ">
              Post
            </button>
          </form>
          <div>
            {selectedTags.map((tag, i) => {
              return (
                <Tag
                  tag={tag}
                  key={i}
                  setSelectedTags={setSelectedTags}
                  selectedTags={selectedTags}
                />
              );
            })}
            {!addTag ? (
              <>
                <span
                  onClick={(e) => setAddTag(true)}
                  class="bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center py-1 px-2 rounded-lg mr-2 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300">
                  +<span class="sr-only">Icon description</span>
                </span>
              </>
            ) : (
              <>
                <span class="inline-flex items-center p-1 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300">
                  <select
                    onChange={(e) => {
                      console.log("change", selectedTags);
                      setSelectedTags([...selectedTags, e.target.value]);
                      setAddTag(false);
                    }}
                    className="inline-flex w-32 items-center text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300">
                    <option>Select an option</option>
                    {tags.map((tag, i) => {
                      if (!selectedTags.includes(tag)) {
                        return <option key={i}>{tag}</option>;
                      }
                    })}
                  </select>
                </span>
              </>
            )}
          </div>
          <div className="relative pt-4">
            {filteredPosts.map((item, index) => {
              return (
                <Post
                  index={index}
                  onClick={openModalFunc}
                  text={item.description}
                  author={item.author}
                  comments={item.comments}
                  tag={item.tag}
                  showOptions={showOptions}
                  setShowOptions={setShowOptions}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              );
            })}
          </div>

          {/* <article class="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <footer class="flex justify-between items-center mb-2">
              <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    class="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Bonnie Green"
                  />
                  Bonnie Green
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  <time pubdate datetime="2022-03-12" title="March 12th, 2022">
                    Mar. 12, 2022
                  </time>
                </p>
              </div>
              <button
                id="dropdownComment3Button"
                data-dropdown-toggle="dropdownComment3"
                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
                <span class="sr-only">Comment settings</span>
              </button>

              <div
                id="dropdownComment3"
                class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  class="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton">
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Remove
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
            <p class="text-gray-500 dark:text-gray-400">
              The article covers the essentials, challenges, myths and stages
              the UX designer should consider while creating the design
              strategy.
            </p>
            <div class="flex items-center mt-4 space-x-4">
              <button
                type="button"
                class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                <svg
                  aria-hidden="true"
                  class="mr-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                Reply
              </button>
            </div>
          </article>
          <article class="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <footer class="flex justify-between items-center mb-2">
              <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    class="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    alt="Helene Engels"
                  />
                  Helene Engels
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  <time pubdate datetime="2022-06-23" title="June 23rd, 2022">
                    Jun. 23, 2022
                  </time>
                </p>
              </div>
              <button
                id="dropdownComment4Button"
                data-dropdown-toggle="dropdownComment4"
                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
              </button>

              <div
                id="dropdownComment4"
                class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  class="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton">
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Remove
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
            <p class="text-gray-500 dark:text-gray-400">
              Thanks for sharing this. I do came from the Backend development
              and explored some of the tools to design my Side Projects.
            </p>
            <div class="flex items-center mt-4 space-x-4">
              <button
                type="button"
                class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                <svg
                  aria-hidden="true"
                  class="mr-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                Reply
              </button>
            </div>
          </article> */}
        </div>
      </section>
    </div>
  );
};
