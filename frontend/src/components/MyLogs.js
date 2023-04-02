import React from "react";
import { useState } from "react";
import axios from "axios";

export const MyLogs = () => {
    return (
        <div className = 'ml-64'>

        {/* Main daily Logs */}
        <div class="mx-4 my-4">            
        <div id="toast-notification" class="w-full max-w-s p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
            <div class="flex items-center">
                <div class="relative inline-block shrink-0">
                    <span class="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                        <svg aria-hidden="true" class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Message icon</span>
                    </span>
                </div>
                <div class="ml-3 text-sm font-normal">
                    <div class="text-sm font-semibold text-gray-900 dark:text-white">Mood - &#128528;</div>
                    <div class="text-sm font-normal">I was feeling a bit low and fatigue today as I woke up. I am still keeping a good vision</div> 
                    <span class="text-xs font-medium text-blue-600 dark:text-blue-500">1 day back</span>   
                </div>
            </div>
        </div>
        </div>          
        <form class="fixed bottom-0 w-full">
        <div class="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 py-2 px-4">
            <div class="flex">
            <div className="px-2 border-gray-200">
                <p>&#x1F620;</p>
            </div>
            <div className="px-2 border-gray-200">
                <p>&#x1F614;</p>
            </div>
            <div className="px-2 border-gray-200">
                <p>&#128528;</p>
            </div>
            <div className="px-2 border-gray-200">
                <p> &#128522;</p>
            </div>
            <div className="px-2 border-gray-200">
                <p>&#128512;</p>
            </div>
            </div>
            <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" class="sr-only">How was your day</label>
                <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
            </div>
    
            <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Add my Daily log
                </button>
                <div class="flex pl-0 space-x-1 sm:pl-2">
                    <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Attach file</span>
                    </button>
                    <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Set location</span>
                    </button>
                    <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Upload image</span>
                    </button>
                </div>
            </div>
        </div>
        </form>
        
        </div>
    );
};