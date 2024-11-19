import React from "react";
import Sidebar from "../components/Sidebar";
import Conversation from "../components/Conversation";

function Chat() {
  return (
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      <div className="w-1/3 bg-gray-200 p-4">
        <Sidebar />
      </div>
      {/* Conversation on the right */}
      <div className="flex-1 bg-white p-4">
        <Conversation />
      </div>
    </div>
  );
}

export default Chat;
