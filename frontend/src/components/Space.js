import React from "react";
import '../css/create_space.css';
import { useState } from "react";


export const Space = () => {
    
  return (
    <div className = 'ml-64'>
      <div className="background-top">
      <div className="create-post">
        <form>
        <img className='image-top' src={displayThumbnail} alt="" />
          <div className="container">
            <h1>Create Your Space</h1>
            <hr />
            <label for="title">
              <b>Title:</b>
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              name="title"
              id="title"
              required
            />

            <label for="psw">
              <b>Description:</b>
            </label>
            <input
              type="text"
              placeholder="Enter Description"
              name="psw"
              id="psw"
              required
            />

            <label for="file-upload">
              <b>Choose an image:  </b>
            </label>
            <label className="file">
              <input
                type="file" accept="image/*"
                id="file"
                aria-label="File browser example"
                onChange={handleChange}
              />
              <span className="file-custom"></span>
            </label>
            <br/> 
            <button type="submit" className="submitbtn">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      </div>
      
    </div>
  );
};
