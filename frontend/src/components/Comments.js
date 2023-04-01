import React from "react";

export const Comments = ({ text }) => {
  return (
    <article class="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
      <footer class="flex justify-between items-center mb-2">
        <div class="flex items-center">
          <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img
              class="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="Jese Leos"
            />
            Jese Leos
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            <time pubdate datetime="2022-02-12" title="February 12th, 2022">
              Feb. 12, 2022
            </time>
          </p>
        </div>
      </footer>
      <p class="text-gray-500 dark:text-gray-400">{text}</p>
    </article>
  );
};
