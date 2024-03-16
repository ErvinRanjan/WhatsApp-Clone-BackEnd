import message from "../model/message.js";
import conversation from '../model/conversation.js';

export const newMessage = async (req,res) => {
    try{
        const newMessage =  new message(req.body);
        await newMessage.save();
        await conversation.findByIdAndUpdate(req.body.conversationId,{message : req.body.text});
        res.status(200).json('Message has been sent successfully');
    }
    catch(error){
        res.status(500).json(error.message);
    }   
}

export const getMessages = async (req,res) => {
    try{
        const messages = await message.find({conversationId : req.params.id });
        res.status(200).json(messages);
    }
    catch(error){
        res.status(500).json(error.message);
    }
}
