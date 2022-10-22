const Conversation = require('../../models/conversation')
const serverStore = require('../../serverStore')


const updateChatHistory = async(conversationId, toSpecifiedSockerId = null) =>{
    try {
        const conversation = await Conversation.findById(conversationId).populate({
            path:'messages',
            model:'Message',
            populate:{
                path:'author',
                model:'User',
                select:"_id username "
            }
        });

            if(conversation){
                const io = serverStore.getSocketServerInstance()
                if(toSpecifiedSockerId){
                    // initial update of chat history
                    return io.to(toSpecifiedSockerId).emit('direct-chat-history') , {
                        messages: conversation.messages,
                        participants: conversation.participants
                    }
                }

                // check if users of this conversation are online or not 
                // if yes emit to them the updated messages

                conversation.participants.forEach(userId => {
                    const activeConnections = serverStore.getActiveConnections(
                        userId.toString()
                    );
                    activeConnections.forEach(socketId => {
                        io.to(socketId).emit('direct-chat-history' , {
                            messages: conversation.messages,
                            participants: conversation.participants,
                        })
                    })
                
                })
            }

    } catch (error) {
        console.error(error)
    }
}

module.exports ={updateChatHistory}