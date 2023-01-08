import React from 'react'
import styled from 'styled-components'

function ChatMessage({text, name, image, timestamp}) {
  return (
    <Container>
        <UserAvatar>
            <img src={image} />
        </UserAvatar>
        <MessageContent>
            <Name>
                {name}
                <span>{new Date(timestamp.toDate()).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</span>
            </Name>
            <Text>
                <span>{text}</span>
            </Text>
        </MessageContent>
    </Container>
  )
}

export default ChatMessage

const Container = styled.div`
    padding: 14px 20px;
    display: flex;
    align-items: center;

    :hover {
        background: rgba(250, 250, 250, 0.3);
    }
`
const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
    }
`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    
    
`
const Name = styled.span`
    font-weight: 500;
    font-size: 11px;
    line-height: 1.4;
    display: flex;
    align-items: center;
    padding-left: 8px;

    span {
        font-weight: 400;
        color: rgb(97, 96, 97);
        margin-left: 12px;
        font-size: 11px;
    }
`
const Text = styled.span`
    margin-top: 7px;
    padding-left: 6px;

    span{
        background: rgba(230, 220, 230, 0.9);
        padding: 6px 16px 7px 14px;
        border-radius: 0 10px 10px 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 1px 1px 2px;
    }
`