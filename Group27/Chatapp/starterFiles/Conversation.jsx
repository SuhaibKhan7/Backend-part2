import React, { useState, useEffect, useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import MessageInput from "./MessageInput";

const Conversation = () => {
  const { chatList, selectUser, chatError } = useContext(ChatContext);

  return (
    <div className=" bg-slate-300 h-screen mr-0 overflow-auto  flex flex-col">
      {selectUser && (
        <h2 className="text-lg font-bold mb-4">
          Welcome {selectUser.fullname}
        </h2>
      )}

      <ul className="space-y-2 flex-1 overflow-auto">
        {/* render chat/conversation Here from chat list */}
          return <li >
            {/* chatmessages here */}
            </li>;
      
      </ul>
      <div>
        {chatError && <p className="text-red-500">{chatError.message}</p>}
      </div>
      {/* <MessageInput /> */}
    </div>
  );
};

export default Conversation;
