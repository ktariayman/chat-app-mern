import { chatActions } from "../actions/chatAction";
const initState = {
  chosenChatDetails: null,
  chatType: null,
  messages: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case chatActions.SET_CHOSEN_CHAT_DETAILS:
      return {
        ...state,
        chosenChatDetails: action.chatDetails,
        chatType: action.chatType,
        messages: [],
      };
    case chatActions.SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
      
    default:
      return state;
  }
};

export default reducer;
