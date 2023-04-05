import React from "react";
import { useState } from "react";
import axios from "axios";

export const MySpace = () => {
    const [isAnxiety, setIsAnxiety] = useState(false);
    const [IsBetterMind, setBetterMind] = useState(false);
    return (
    <div className = 'ml-64 z-50'>    
        <div class="mx-4 my-4"> 
        <div id="toast-notification" class="w-full max-w-s p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">    

        <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
        <h2 id="accordion-color-heading-1" onClick={() => setIsAnxiety(!isAnxiety)}>
            <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
            <span>The Anxiety Helpers</span>
            <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </h2>
        {isAnxiety && 
            <div id="accordion-color-body-1" aria-labelledby="accordion-color-heading-1">
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">

            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">2023-04-02</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Please join the room code with ID- AnxietyHelpers of 6pm - 7pm</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                   http://localhost:3050/inspire/AnxietyHelpers
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
            <br />
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">2023-03-02</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Please join the room code with ID- AnxietyHelpers of 6pm - 7pm</p>
                
            </div>
            </div>
            </div>
        }
        <h2 id="accordion-color-heading-2" onClick={() => setBetterMind(!IsBetterMind)}>
            <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
            <span>Place for a Better mind</span>
            <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </h2>
        {IsBetterMind && 
            <div id="accordion-color-body-1" aria-labelledby="accordion-color-heading-1">
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">

            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">2023-01-03</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Please join the room code with ID- MindHelpers at 5am - 6am</p>
                
            </div>
            <br />
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">2023-04-01</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Please join the room code with ID- AnxietyHelpers of 6pm - 7pm</p>
                
            </div>
            </div>
            </div>
        }
        <h2 id="accordion-color-heading-3">
            <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
            <span>Fight against all labelling</span>
            <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </h2>
        <div id="accordion-color-body-3" class="hidden" aria-labelledby="accordion-color-heading-3">
            <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
            </ul>
            </div>
        </div>
        </div>

        </div>
        </div>
    </div>
    );
};