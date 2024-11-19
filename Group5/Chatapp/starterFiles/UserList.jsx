import React, { useState, useEffect, useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { baseurl, getRequest } from "../utilities/service";
import Conversation from "./Conversation";

import { ChatContext } from "../context/ChatContext";
function Userlist({}) {
  const {
    userList,
    setUserList,
    setSelectUser,
    loading,
    userError,
    fetchConversation,
  } = useContext(ChatContext);

  if (loading) {
    return (
      <div className="text-center p-4">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (userError) {
    return (
      <Alert variant="danger" className="m-4">
        {userError}
      </Alert>
    );
  }

  return (
    // conditional Rendering usernames
    <div>
      {/* check if userlist is empty or not  */}
      return (
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <h5 className="mb-1"> </h5>
        {/* Userfullname in h5 */}
      </ListGroup.Item>
      );
      <ListGroup.Item className="text-muted text-center">
        No users found
      </ListGroup.Item>
    </div>
  );
}

export default Userlist;
