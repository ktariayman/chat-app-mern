const User = require("../../models/user")
const FriendInvitation = require("../../models/friendInvitation")
const friendsUpdate = require("../../socketHandler/updates/friends")

const invite = async (req, res) => {
  const { userId, email } = req.user;
  const targetEmail = req.body.email;
  console.log(email ,"email")
    console.log("req.body" , req.body)
    console.log("targetEmail" , targetEmail)
    if (targetEmail.toLowerCase() === email.toLowerCase()) {
      console.log("you can't invite yourself")

      return res.status(409).send("you can't invite yourself") 
    }


    const targetUser = await User.findOne({email : targetEmail.toLowerCase()})


    if(!targetUser) {
      console.log("targetUser")
      return res.status(404).send(`user with email : ${targetEmail} not found`)
    }


    // check if invitation has already been sent
    const InvitationHasAlreadyBeenSent = await FriendInvitation.findOne({
      senderId: userId,
      receiverId: targetUser._id
    })

    if(InvitationHasAlreadyBeenSent) {  
      console.log("invitation has already been sent")
      
      return res.status(409).send("invitation has already been sent") 
    }

    // check if user which we would like to invite is already friend 

    const userIsalreadyFriend = targetUser.friends.find( (friendId) => friendId.toString() === userId.toString())
    if(userIsalreadyFriend) {
      console.log("You are aleady friend with that email address")

      return res.status(409).send("You are aleady friend with that email address")
    };

    // save the invitation in the database

    const newInvitation = await FriendInvitation.create({
      senderId: userId,
      receiverId: targetUser._id
    })
    console.log("newInvitation")
    
    // if invitation has been created , update friends invitation if other user is already online

    // send pending invitatio update to the receiver user

    friendsUpdate.updateFriendsPendingInvitation(targetUser._id.toString())
    return res.status(201).send('invitation has been sent')
  }
module.exports= invite;