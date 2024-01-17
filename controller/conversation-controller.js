import conversation from "../model/conversation.js";

export const newConversation = async (req,res) => {
    try{
        const senderId = req.body.senderId;
        const recieverId = req.body.recieverId;
        
        const exist = await conversation.findOne({ members : { $all : [senderId,recieverId] }});

        if(exist){
            res.status(200).json('conversation already exists');
            return;
        }

        const newConversation = new conversation({
            members : [senderId,recieverId]
        });

        await newConversation.save();
        res.status(200).json('New conversation has been created');
    }
    catch(error){
        res.status(500).json(error.message);
    }
}