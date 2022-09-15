const FriendInvitation = require("../../models/friendInvitation");
const friendsUpdate  = require ('../../socketHandler/updates/friends')

const reject = async (req, res) => {

    try {
    
        const {id} = req.body
        const {userId} = req.user
        // remove the invitation from friend invitations list
        const invitationExist = await FriendInvitation.exists({ _id:id})
        if(invitationExist){
            await FriendInvitation.findByIdAndDelete(id)
        }
            // update pending invitations list
        friendsUpdate.updateFriendsPendingInvitation(userId)
        return res.status(200).send('invitations successfully rejected')

    } catch (error) {   
            console.log(error);
            return res.status(500).send({ "something wrong , try again" : error });
    }
};
module.exports= reject;