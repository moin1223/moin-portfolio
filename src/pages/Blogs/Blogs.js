import React from "react";


import portal from "../../assets/img/blogs/router.png";
import sobzi from "../../assets/img/blogs/javascript.jpg";
import metro from "../../assets/img/blogs/animation.jpg";

import BlogPost from "../BlogPost/BlogPost";

const Blogs = () => {

  const blogs = [
    {
      image: portal,
      title: "All the fundamentals react concepts",
      live: ""
    },
    {
      image: sobzi,
      title: "5 things you should know about Javascript",
      live: ""
    },
    {
      image: metro,
      title: "Taking React Animation to next level",
      live: ""
    },
  ]

  return (
    <div className="container mt-5">
      <h1 className="text-center text-white mb-5 mt-5">Some of my Articles</h1>
      <div className="row">
        
        {
          blogs.map(blog => <BlogPost blog={blog}/>)
        }
      </div>
    </div>
  );
};

export default Blogs;
