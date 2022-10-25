const Message = require('../models/message')
const Conversation = require('../models/conversation')
const chatUpdate = require( './updates/chat')
const directMessageHandler = async (socket , data)  => {
    try {
        console.log('direct message has been handled')
        const {userId} = socket.user;

        const {receiverUserId , content} = data;

        // create new message 
         const message = await Message.create({
            content : content,
            author: userId,
            date : new Date(),
            type : "DIRECT",
         })

        //  find if conversation exist with this two users , if not create new conversation.
         const conversation = await Conversation.findOne({
            participants: {$all : [userId , receiverUserId]}
        })

        if(conversation){
            conversation.messages.push(message._id);
            await conversation.save();

            // perform and update to sender and receiver if he is online ( realtimeCommunication)
            chatUpdate.updateChatHistory(conversation._id.toString())

        }else {
            // create a new conversation 
            const newConversation = await Conversation.create({
                messages : [message._id],
                participants : [userId, receiverUserId]
            })
            // perform and update to sender and receiver if he is online ( realtimeCommunication)
            chatUpdate.updateChatHistory(newConversation._id.toString())

        }
    } catch (error) {
        console.log(error);
    }
}


module.exports = directMessageHandler;