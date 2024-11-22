import Conversation from "../model/converstion.model.js";
import Message from "../model/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const senderId = req.userid;
    const receiverId = req.params.id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = Conversation.create({
        participants: [senderId, receiverId],
        messages: [],
      });
    }
    const newmessage = await Message({
      senderId,
      receiverId,
      message,
    });
    await newmessage.save();
    conversation.messages.push(newmessage._id);
    await conversation.save();
    res.status(200).send(newmessage);
  } catch (error) {
    return res.status(500).send("Internal server Error", error.message);
  }
};

export const getMessage = async (req, res) => {
  try {
    const senderId = req.userid;
    const receiverId = req.params.id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    })
      // .populate("messages")
      // .exec();
if(conversation)
{
  const message= await Message.find({
    _id:{$in:conversation.messages}
  })
   console.log(conversation);
   res.json(message);
}





    // console.log(conversation);
    // res.json(conversation);
  } catch (error) {
    return res.status(500).send("Internal server Error", error.message);
  }
};
