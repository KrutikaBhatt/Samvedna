import React from "react";
import { useState } from "react";
import axios from "axios";
import { Mood } from "../components/Mood";

export const Progress = () => {
    return (
        <div className ='ml-64'>
            <div class="mx-4 my-4">
                <h4 class="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Progress</h4>
            </div>
            <div class="w-[100px]">
            <Mood />
            </div>
        </div>
    );
};