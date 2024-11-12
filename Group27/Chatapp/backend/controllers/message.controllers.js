import Conservation from "../models/conservation.model.js";
import Message from "../models/message.models.js";

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const senderId = req.user._id;
    const receiverId = req.params.id;

    let conversation = await Conservation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conservation.create({
        participants: [senderId, receiverId],
        message: [],
      });
    }
    const newmessage = new Message({
      senderId,
      receiverId,
      message,
    });
    await newmessage.save();
    conversation.message.push(newmessage._id);
    res.status(200).json(newmessage);

    
  } catch (error) {
    return res.status(500).send("Internal Server Error", error.message);
  }
};
export default sendMessage;
