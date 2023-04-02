import axios from "axios";
import React, { useEffect, useState } from "react";
import { Comments } from "./Comments";
import { Modal } from "./Modal";
import Delete from "../images/Delete.js"

export const Post = ({
	text,
	author,
	comments,
	index,
	onClick,
	tag,
	isModerator,
	postId,
	userName,
	setReloadPost,
}) => {
  
	const [hideComments, setHideComments] = useState(false);
	const [showOptions, setShowOptions] = useState(false);

	const deletePost = async () => {
		const res = await axios.post("http://localhost:8080/post/deletePost", {
			post_id: postId,
			username: userName,
		});
		console.log(res);
		setReloadPost((reload) => !reload);
	};

  useEffect(() => {
    console.log(index);
  }, [showOptions])

	return (
		<div key={postId}>
			<article
				class={`p-6 mb-6 ${
					index !== 0 && "border-t"
				}  border-gray-200 dark:border-gray-700 text-base bg-white rounded-lg dark:bg-gray-900`}
			>
				<footer class="flex justify-between items-center mb-2">
					<div class="flex items-center justify-between w-full">
						<div className="flex">
							<p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
								<img
									class="mr-2 w-6 h-6 rounded-full"
									src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
									alt="Michael Gough"
								/>
								{author}
							</p>
							<p class="text-sm text-gray-600 dark:text-gray-400">
								<time pubdate datetime="2022-02-08" title="February 8th, 2022">
									Feb. 8, 2022
								</time>
							</p>
						</div>
						<div className="">
							<p className="mr-2 inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white dark:bg-gray-800 py-1 px-2 rounded-lg" >{tag}</p>
              { isModerator &&
                <button
                onClick={deletePost}
                className="mr-2 inline-flex items-center mr-3 text-sm text-white bg-red-700 hover:bg-red-600 py-1 px-2 rounded-lg" >Delete</button>
              }
						</div>
					</div>
          
				</footer>

				<p class="text-gray-500 dark:text-gray-400">{text}</p>
				<div class="flex items-center mt-4 space-x-4">
					<button
						type="button"
						onClick={() => onClick(index)}
						class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
					>
						<svg
							aria-hidden="true"
							class="mr-1 w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
							></path>
						</svg>
						Reply
					</button>
					{!hideComments && (
						<button
							className="text-gray-500 dark:text-gray-400"
							onClick={() => setHideComments(!hideComments)}
						>
							{" "}
							Show Comments
						</button>
					)}
				</div>
			</article>

			{hideComments &&
				comments.map((item, index) => {
					return <Comments text={item.text} author={item.author} />;
				})}
			{hideComments && (
				<button
					className="text-gray-500 dark:text-gray-400"
					onClick={() => setHideComments(!hideComments)}
				>
					{" "}
					Hide comments
				</button>
			)}
		</div>
	);
};
