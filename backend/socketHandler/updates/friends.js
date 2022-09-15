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

const updateFriends = async(userId) =>{
    try {
        const user = await User.findById(userId , {_id: 1 , friends:1})
        .populate( 'friends' , '_id username email')
        if(user){
            const friendsList = user.friends.map((f)    =>{
                return {
                    id: f.id,
                    username: f.username,
                    email: f.email
                }
            });

              // find active connections for specific id (online users only)

        const receiverList = serverStore.getActiveConnections(userId);
        // get io instance of the server
        const io = serverStore.getSocketServerInstance()

        receiverList.forEach((receiverSocketId) => {
            io.to(receiverSocketId).emit('friends-list', {
                friends : friendsList ? friendsList : []
            })
        })
        }


      

    } catch (error) {
        console.error(error)
    }
}

module.exports =    {
    updateFriendsPendingInvitation,
    updateFriends
} 