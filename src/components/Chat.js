import {React} from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import ChatMessage2 from './ChatMessage2';
import db from '../firebase';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef} from 'react';
import firebase from 'firebase';


function Chat({user}) {

  let {channelId} = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const getMessages = () => {
    db.collection('rooms')
    .doc(channelId)
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot((snapshot)=>{
        let messages = snapshot.docs.map((doc)=>doc.data());
        setMessages(messages);
    })
  }

  const sendMessage = (text) => {
    if(channelId)
    {
      let payload = {
        text: text,
        timestamp: firebase.firestore.Timestamp.now(),
        user: user.name,
        userImage: user.photo
      }
      db.collection("rooms").doc(channelId).collection('messages').add(payload);
      console.log(payload);
    }
  }

  const getChannel = () => {
    db.collection('rooms')
    .doc(channelId)
    .onSnapshot((snapshot) => {
      setChannel(snapshot.data());
    })
  }

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId])

  useEffect(() => {
      messagesEndRef.current?.scrollIntoView();
  }, [messages]);


  return (
    <Container>
        <Header>
          <Channel>
            <ChannelName>
                # {channel && channel.name}
            </ChannelName>
            {/* <ChannelInfo>
                Info about channel
            </ChannelInfo> */}
          </Channel>
          <ChannelDetails>
            <div>
              Details
            </div>
            <Info/>
          </ChannelDetails>
        </Header>

          <MessageContainer>
          {
            messages.length > 0 && 
            messages.map((data, index) => (
                user.name !== data.user ? 
                (
                    <ChatMessage 
                      text={data.text}
                      name={data.user}
                      image={data.userImage}
                      timestamp={data.timestamp}
                    />)
                :
                (
                    <ChatMessage2 
                      text={data.text}
                      name={data.user}
                      image={data.userImage}
                      timestamp={data.timestamp}
                    />
                )
            ))
          }
          <div ref={messagesEndRef} />
          </MessageContainer>

        <ChatInput sendMessage={sendMessage}/>
    </Container>
    
  )
}

export default Chat

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
  min-height: 0;
`
const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1), 0 0 10px 0 rgba(0, 0, 0, 0.1);

`
const MessageContainer = styled.div`
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

const Channel = styled.div`
`
const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
`
const ChannelName = styled.div`
  font-weight: 700;
  font-size: 20px;
  padding-left: 14px;
`
// const ChannelInfo = styled.div`
//   font-weight: 400;
//   color: #606060
//   font-size: 13px;
//   margin-top: 8px;
//   color: #606060;
// `
const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`