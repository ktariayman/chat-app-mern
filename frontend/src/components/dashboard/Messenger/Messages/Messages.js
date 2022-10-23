import React ,{useRef , useEffect}from 'react'
import MessagesHeader from './MessageHeader'
import {connect} from 'react-redux'
import './Messages.css'
import SingleMessage from './SingleMessage'

function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat)
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-')
}
const DateSeparator = {
  'width':'95%',
  'backgroundColor': "#b9bbbe" ,
  'height': "lpx" ,
  'position': "relative",
  'marginTop': "2epx" ,
  'marginBottom': " lepx",
}
const DateLabel = {
  'backgroundColor': "#36393f" ,
  'position': "absolute",
  'left': "45%",
  'top': "-lepx",
  'color': "#b9bbbe",
  'padding': "0 5px",
  'fontSize' :" 14px",
}

const Messages = ({chosenChatDetails , messages}) => {

  return (
    <div className='messages__mainContainer'>
        <MessagesHeader name={chosenChatDetails?.name}/>
        {messages?.map((message , index ) => {
          const sameAuthor = index >0 && messages[index].author._id === messages[index-1].author._id 
          const sameDay = index>0 && convertDate(new Date(message?.date)) ===  convertDate(new Date(messages[index-1]?.date))

          
          return (
          <div key={message._id} >
                  {
                    (!sameDay || index ===0) && (
                      <div style={DateSeparator}>
                        <span style={DateLabel}>{convertDate(new Date(message?.date))}</span>
                      </div>
                    )
                  }
                  <SingleMessage 
                  content={message.content}
                  username={message.author.username}     
                  sameAuthor={sameAuthor}      
                  date={convertDate(new Date(message.date))}
                  sameDay={sameDay}
                  /> 
          </div>
          )        
        })}
        
    </div>
  )
}
const MapStoreStateToProps = ( {chat}) => {
    return {
        ...chat
    }
}
export default connect(MapStoreStateToProps)(Messages)