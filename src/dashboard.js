import data from "./data.js"
import Post from "./post.js"
import { Link } from "react-router-dom"
import logo from "./img/IMG_5672.png"
import React from 'react'

function dashboard() {
  return (
    <div className="d-flex justify-content-center align-items-center gradient-custom">
      <div className="container">
        <div className="row">
          <h1><font color="white">Welcome to your Dashboard</font></h1>
          <div className="d-flex justify-content-end">
            <img style={{ width: 300, height: 100 }} src={logo} alt="Logo Image" />
          </div>
          <Post
            className="col-sm"
            data={{
              prompt: "Find a stranger and spell a word with your hands!",
              img: localStorage.getItem("img"),
            }}
          />
          {data.map((old_post) => (
            <div className="col-sm d-flex justify-content-center pb-2">
              <Post data={{ prompt: old_post.prompt, img: old_post.img }} />
            </div>
          ))}
          <Link to="/">
            <button
              className="btn btn-outline-light btn-lg px-5"
              type="submit"
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
