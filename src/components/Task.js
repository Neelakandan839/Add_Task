import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Task.css";

function Task({ match }) {
  const url = "https://jsonplaceholder.typicode.com";
  const [user, setUser] = useState({});
  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);

  // function to get the data from API
  let fetchdata = async () => {
    try {
      const { data: postdata } = await axios.get(
        `${url}/posts/${match.params.id}`
      );
      const { data: userdata } = await axios.get(
        `${url}/users/${match.params.id}`
      );
      const { data: commentsdata } = await axios.get(
        `${url}/posts/${match.params.id}/comments`
      );
      setUser(userdata);
      setPost(postdata);
      setComment(commentsdata);
    } catch (err) {
      console.warn("Error Fetching data from server", err);
    }
  };

  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
   <></>
  );
}

export default Task;
