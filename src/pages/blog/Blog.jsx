import React, { useEffect, useState } from "react";
import BlogTitle from "../../components/blog/BlogTitle";
import BlogCardContainer from "../../components/blog/BlogCardContainer";
import { blogPostData } from "../../constans";

function Blog() {
  const [blog, setBlog] = useState(blogPostData);
  const [countLoad, setCoutLoad] = useState(1);
  const [data, setData] = useState(blog[0]);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    // stop added obj and disabled lore button //
    if (blog.length - 1 === countLoad) {
      setDisabled(true);
    }
    // added new obj in data state //
    setCoutLoad((prev) => prev + 1);
    setData((prevData) => [...prevData, blog[countLoad]].flat());
  };

  useEffect(() => {
    window.scrollY = 0;
  }, []);

  return (
    <>
      <BlogTitle />
      <BlogCardContainer
        handleClick={handleClick}
        data={data}
        disabled={disabled}
      />
    </>
  );
}

export default Blog;
