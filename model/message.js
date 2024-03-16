import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    conversationId : {
        type : String
    },
    senderId : {
        type : String
    },
    recieverId : {
        type : String
    },
    text : {
        type : String
    },
    type : {
        type : String
    }
},{
    timestamps : true
}
);

const message = new mongoose.model('Message',messageSchema);
export default message;