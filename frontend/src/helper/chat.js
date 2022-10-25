import store from "../store/store"
import { setMessages } from "../store/actions/chatAction"
export const updateDirectChatHistoryIfActive = (data) => {
    const {participants, messages} = data
    // find if of user from token & id from active from conversation
    const receiverld = store.getState().chat.chosenChatDetails?.id;
    const userId= store.getState().auth.user._id;
    
    if (receiverld && userId) {
        const usersInCoversation= [receiverld, userId];
        updateChatHistoryIfSameConversationActive({
            participants,
            usersInCoversation,
            messages,
        })
    }
}


const updateChatHistoryIfSameConversationActive = ({
    participants,
    usersInCoversation,
    messages,
}) => {
    const result = participants.every(function(participantId){
        return usersInCoversation.includes(participantId)
    })
    if(result){
        store.dispatch(setMessages(messages));
    }
}