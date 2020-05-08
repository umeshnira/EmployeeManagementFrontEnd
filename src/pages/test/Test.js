import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import Pagination from "../../components/common/Pagination";
export const Test = () => {
  const [posts, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPost(res.data);
  };

  const handlePageClick = React.useCallback(
    (pageNumber) => {
      console.log(pageNumber);
      setCurrentPage(pageNumber);
    },
    [setCurrentPage]
  );

  // current post.
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Fragment>
      <ul className="list-group">
        {currentPost.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <Pagination
        totalPost={posts.length}
        postPerPage={postPerPage}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />
    </Fragment>
  );
};
