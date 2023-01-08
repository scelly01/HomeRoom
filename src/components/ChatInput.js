import React, {useState} from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import Picker from 'emoji-picker-react';
//import { Emoji, EmojiStyle } from 'emoji-picker-react';

function ChatInput({sendMessage}) {

  const [input, setInput] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [emojien, setEmojien] = useState(false);
  
    const onEmojiClick = (e, emojiObject) => {
      setChosenEmoji(emojiObject);
      setEmojien(!emojien);
      //setInput(pinput => pinput + emojiObj.unicode);'
      console.log(chosenEmoji.emoji);
      //Picker.addEventListener('emoji-click', event => {
       //  console.log(event.detail);
       //});
    };

    const send = (e) => {
        e.preventDefault();
        if (!input) 
            return;
        
        sendMessage(input)
        setInput("")
    }


     return (
        <Container>
            <InputContainer>
                <Smileybutton 
                    id='smileybtn'
                    onClick={()=>{setEmojien(!emojien)}}>
                        <Smiley>
                        </Smiley>
                </Smileybutton>
                    {
                        emojien ? 
                        (<Pickerholder>
                            <Picker onEmojiClick={onEmojiClick} />
                        </Pickerholder>)
                        : 
                        (<Emptypicker>

                        </Emptypicker>)
                    }
                {/* <form onSubmit={(e)=>{e.preventDefault(); document.getElementById('smileybtn').disabled=true; send(e);}}> */}
                <form onSubmit={send}>
                    <Inputholder>
                        <input onChange= {(e)=>setInput(e.target.value)}
                            value={input}
                            //value={chosenEmoji.srcElement}
                            type="text"
                            placeholder="Message here..."/>

                    </Inputholder>
                    
                    <SendButton type="submit"
                        onClick={send}>
                        <Send/>
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput


const Container = styled.div `
    padding: 26px 20px;
`
const InputContainer = styled.div `
    display: flex;
    align-items: center;

    form {
        display: flex;
        flex:1;
        align-items: center;
        justify-content: center;
        height: 42px;
    }
        
`

const Inputholder = styled.div `
    
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;
    border: 1px solid #8D8D8E;
    border-radius: 200px;
    margin: 0 8px 0 4px;
    flex:1;

    input {
        flex:1;
        height: 38px;
        outline: none;
        font-size: 15px;
        margin: 0 22px;
        border: none;
    }
    
`


const SendButton = styled.button `
    background: rgb(85,162,176,0.7);
    border-radius: 50%;
    width: 42px;
    height: 42px;
    margin-right: 50px;
    margin-bottom: 3px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    .MuiSvgIcon-root {
        width: 20px;
        padding-left: 2px;
    }

    :hover {
        transform: rotateY(0deg) rotate(-10deg);
    }
`

const Send = styled(SendIcon)`
    color: white;
`

const Emptypicker = styled.div`
`

const Pickerholder = styled.div`
    ${'' /* height: 160px;
    width: 160px; */}
    position: fixed;
    bottom: 74px;
`

const Smileybutton = styled.button `
    border-radius: 50%;
    width: 36px;
    height: 36px;
    background: transparent;
    margin-top: 2px;
    margin-left: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;

    .MuiSvgIcon-root {
        height: 30px;
        width: 30px;
    }
`
const Smiley = styled(SentimentSatisfiedAltOutlinedIcon)`
    color: rgb(180, 170, 180);

    :hover
    {
        color: rgba(180, 170, 180, 0.8);
    }
`

{
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" ></script>
}