import Conservation from "../models/conservation.model.js";
import Message from "../models/message.models.js";

const sendMessage = async (req, res) => {
  console.log("in Message");
  try {
    const { message } = req.body;
    const senderId = req.user._id;
    const receiverId = req.params.id;

    console.log(message, senderId, receiverId);
    console.log(".....");
    let conversation = await Conservation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    console.log(conversation);
    if (!conversation) {
      conversation = await Conservation.create({
        participants: [senderId, receiverId],
        messages: [],
      });
    }
    const newMessage = await Message({
      senderId,
      receiverId,
      message,
    });
    await newMessage.save();

    conversation.messages.push(newMessage._id);

    await conversation.save();

    res.status(200).json(newMessage);
  } catch (error) {
    res.status(500).send("Intenal Server Error", error.message);
  }
};
export default sendMessage;
