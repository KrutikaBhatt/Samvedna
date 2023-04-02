import React from "react";
import { useState } from "react";
import axios from "axios";
import { Mood } from "../components/Mood";

export const Progress = () => {
    return (
        <div className ='ml-64'>
            <div class="mx-4 my-4">
                <h4 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">Progress</h4>
            </div>
            <div class="w-[200px]">
            <Mood />
            </div>
        </div>
    );
};