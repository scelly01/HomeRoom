import React from 'react'
import styled from 'styled-components'

function ChatMessage({text, name, image, timestamp}) {
  return (
    <Container>
        
        <MessageContent>
            <Name>
                <span>{new Date(timestamp.toDate()).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</span>
                {name}
            </Name>
            <Text>
                <span>{text}</span>
            </Text>
        </MessageContent>
        <UserAvatar>
            <img src={image} />
        </UserAvatar>

    </Container>
  )
}

export default ChatMessage

const Container = styled.div`
    padding: 14px 22px;
    display: flex;
    align-items: center;
    justify-content: right;

    :hover {
        background: rgba(250, 250, 250, 0.5);
    }
`
const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
    }
`
const MessageContent = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    
`
const Name = styled.span`
    font-weight: 500;
    font-size: 11px;
    line-height: 1.4;
    display: flex;
    align-items: center;
    padding-right: 8px;

    span {
        font-weight: 400;
        color: rgb(97, 96, 97);
        margin-right: 12px;
        font-size: 11px;
    }
`
const Text = styled.span`
    margin-top: 7px;
    padding-right: 6px;
    padding-top: 2px;

    span{
        background: rgb(85,162,176,0.3);
        padding: 6px 14px 7px 16px;
        border-radius: 10px 0 10px 10px;
        box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 2px 0;
    }
`