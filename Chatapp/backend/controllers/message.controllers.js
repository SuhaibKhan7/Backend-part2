import Conservation from "../models/conservation.model.js";
import Message from "../models/message.models.js";

export const sendMessage = async (req, res) => {
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
        messages: [],
      });
    }
    console.log(conversation);
    const newmessage = new Message({
      senderId,
      receiverId,
      message,
    });
    await newmessage.save();
    const _id = newmessage._id;
    conversation.messages.push({ _id });

    await conversation.save();

    res.status(200).json(newmessage);
  } catch (error) {
    return res.status(500).send("Internal Server Error", error.message);
  }
};

export const getMessage = async (req, res) => {
  try {
    const senderId = req.user._id;
    const receiverId = req.params.id;

    let conversation = await Conservation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    // .populate("messages")
    // .exec();

    if (conversation) {
      const messages = await Message.find({
        _id: { $in: conversation.messages },
      }); 
      console.log(messages);
      res.send(messages);
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error", error.message);
  }
};
