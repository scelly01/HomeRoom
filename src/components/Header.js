import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { generatePath, useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function Header({user, signOut, rooms, getChannels}) {

  
  const navigate = useNavigate();

  const [query, setQuery] = useState([]);
  //const [qchoice, setQchoice] = useState([]);
  let qchoice = [];

  // useEffect(() => {
  //   getChannels();
  //   setQuery(query.toLowerCase());
  //   setQchoice(rooms.filter(room => room.name.toLowerCase().includes(query)));
  //  }, [query])

   const search = (e) => {
       e.preventDefault();

       setQuery(query.toLowerCase());
       //console.log(query);
       //getChannels();
       //setQchoice(rooms.filter(room => room.name.toLowerCase().includes(query)));
       qchoice = rooms.filter(room => room.name.toLowerCase().includes(query));
       //console.log(qchoice[0].id);
       goToChannel(qchoice[0].id);
       setQuery("");
   }

    const goToChannel = (id) => {
         const path = generatePath('./room/:id', { id });
         navigate(path);
         setQuery("");
   }

  return (
    <Container>
        <Main>
        <form>
              <SearchContainer>
                <Search>
                    <input type="text" 
                      onChange={(e) => setQuery(e.target.value)}
                      value = {query}
                      placeholder="Search Rooms" 
                      size="54"
                    />
                </Search>
              </SearchContainer>

              <SearchButton
                  type="submit"
                  onClick={search}>
                  <SearchOutlinedIcon />
              </SearchButton>
        </form>
        </Main>

        <UserContainer>
            <Name>
              {user.name}
            </Name>
            <Tippy content={<span>Logout</span>}>
              <UserImage onClick={signOut}>
                <img src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"} /> 
              </UserImage>
            </Tippy>
        </UserContainer>

    </Container>
  )
}

export default Header

const Container = styled.div`
  background: #350d36;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Main = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 16px;
  }
`

const SearchContainer = styled.div`
  min-width: 300px;
`

const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  width: 100%;
  border-radius: 14px;
  display: flex;
  align-items: center;
  background-color: rgb(60,20,60);

  input {
    background-color: transparent;
    border: none;
    padding: 4px 0;
    text-align: center;
    color: white;
  }

  input: focus {
    outline: none;
  }
`
const SearchButton = styled.button`    
    background: #350d36;
    color: white;
    cursor: pointer;
    border: none;
    padding-top: 4px;

    :hover {
        color: rgb(200,200,200);
    }
`

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`

const Name = styled.div`
  padding-right: 16px;
  font-size: 14px;
`

const UserImage = styled.div`
  width: 22px;
  height: 22px;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 50%;
  }
`