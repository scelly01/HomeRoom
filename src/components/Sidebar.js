import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { sidebarItemsData } from '../data/SidebarData';
import AddIcon from '@mui/icons-material/Add';
import db from '../firebase';
//import { useHistory } from "react-router-dom";
import { generatePath, useNavigate } from 'react-router-dom';
import MessageIcon from '@mui/icons-material/Message';

function Sidebar(props) {

  //const history = useHistory();
  const navigate = useNavigate();

  const goToChannel = (id) => {
    //if(id){
        const path = generatePath('./room/:id', { id });
        navigate(path);
        console.log(id);
    //}
  }

  const addChannel = () => {
    const promptName = prompt("Enter channel name");
    if(promptName){
      db.collection('rooms').add({
        name: promptName
      })
    }
  }


  return (
    <Container>


      <WorkSpaceContainer>
        <Name>
          HomeRoom
        </Name>
        <NewMessage>
          {/* <AddCircleOutlineIcon /> */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4ZDW9B7TrWnRvPODtDjAjs1UxlmeejmNdA&usqp=CAU" 
              alt="logo" 
              onClick={() => window.location.reload()}
              />
        </NewMessage>
      </WorkSpaceContainer>

      <ChannelsContainer>

        <NewChannelContainer>
            <HederContainer>
              <MessageIcon />
              <div>Rooms</div>
            </HederContainer>

            <NewChannelContainerButton>
              <Add onClick={addChannel} ></Add>
            </NewChannelContainerButton>
        </NewChannelContainer>

        <ChannelsList>
            {
              props.rooms.map(item => (
                <Channel onClick={()=>goToChannel(item.id)}>
                  # {item.name}
                </Channel>
              ))
            }
        </ChannelsList>

      </ChannelsContainer>


      {/* <MainChannels>
        {
          sidebarItemsData.map(item => (
            <MainChannelItem>
              {item.icon}
              {item.text}
            </MainChannelItem>
          ))
        }
      </MainChannels> */}
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  background: #3F0E40;
`

const WorkSpaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 26px;
  border-bottom: 1px solid #523753;
  font-size: 22px;
  font-weight: 300;
`
const Name = styled.div`
`
const HederContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    padding-bottom: 6px;
    padding-left: 8px;
  }
`

const NewMessage = styled.div`
  width: 24px;
  height: 24px;
  ${'' /* background:  white;
  color: #3F0E40;
  ${'' /* fill: #eddfed; */}
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  border-radius: 50%;
  margin-right: 30px;

  img {
    width: 100%;
    border-radius: 50%;
    border: 3px solid white;
  }

`

const MainChannels = styled.div`
  padding-top: 20px;
`

const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  
  :hover {
    background: #350D36;
    color: rgb(288, 271, 288);
  }
`

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 25px;
  height: auto;
`

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 20px;
  padding-right: 12px;
  padding-top: 8px;
  color: white;
  font-size: 22px;
  font-weight: 400;

`
const NewChannelContainerButton = styled.button`
  cursor: pointer;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: rgb(70,24,70);

  :hover {
    background: #350D36;
  }
`

const Add = styled(AddIcon)`
    color: white;
`

const ChannelsList = styled.div`
  padding-top: 10px;
  margin-bottom: 10px;
`

const Channel = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  margin-left: 40px;
  padding-top: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  cursor: pointer;
  font-size: 19px;
  border-bottom: 1px solid #523753;

  :hover{
    color: rgb(288, 271, 288);
    background: #350D36;
  }
`