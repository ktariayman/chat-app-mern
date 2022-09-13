const User = require('../../models/user')

const FriendInvitation = require('../../models/friendInvitation')
const serverStore = require('../../serverStore');
const updateFriendsPendingInvitation = async(userId) =>{
    try {
        const pendingInvitations = await FriendInvitation.find({
            receiverId: userId
        }).populate('senderId', '_id username email');

            // find if user of specified userId has active connection
            const receiverList = serverStore.getActiveConnections(userId);

            const io = serverStore.getSocketServerInstance()

            receiverList.forEach((receiverSocketId) => {
                io.to(receiverSocketId).emit('friends-invitations', {
                    pendingInvitations : pendingInvitations ? pendingInvitations  : []
                })
            })
    } catch (error) {
        console.error(error)
    }
}

module.exports =    {
    updateFriendsPendingInvitation
} 