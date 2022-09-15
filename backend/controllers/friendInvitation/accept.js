const FriendInvitation = require("../../models/friendInvitation");
const User = require("../../models/user");
const friendsUpdate  = require ('../../socketHandler/updates/friends')

const accept = async (req, res) => {

    try {
        const {id} = req.body
        const invitationExist = await FriendInvitation.findById(id)
        if(!invitationExist){
            return res.status(404).send('error , please try again')
        } 
        const {senderId , receiverId} = invitationExist
        
        // update User from InvitationPendingList to friendList 
        const senderUser = await User.findById(senderId)
        senderUser.friends = [ ...senderUser.friends , receiverId]
        
        const receiverUser = await User.findById(receiverId)
        receiverUser.friends = [ ...receiverUser.friends , senderId]

        await senderUser.save()
        await receiverUser.save()

        // delete invitation after it has been accepted

        await FriendInvitation.findByIdAndDelete(id)

        // update list of the friends if the users are online

        // update list of friends pending invitation
        friendsUpdate.updateFriendsPendingInvitation(receiverId.toString())
        return res.status(200).send('invitation accepted and friend added successfully')
    }catch(err) {
        console.log(err);
        return res.status(200).send('something wrong , try again' + error)

    }
};
module.exports= accept;