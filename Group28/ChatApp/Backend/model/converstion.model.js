import mongoose, { Schema } from "mongoose";
const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId, //sender
        ref: "User",
      },

      {
        type: mongoose.Schema.Types.ObjectId, //receiver
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  { timestamps: true }
);
const Conversation = mongoose.model("conversation", conversationSchema);
export default Conversation;
