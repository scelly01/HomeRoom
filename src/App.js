import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Nochat from './components/Nochat'
import db, { auth } from './firebase'
import { useEffect } from 'react';
import { useState } from 'react';
import {provider} from "./firebase"
// https://assets9.lottiefiles.com/packages/lf20_Pjju9pls0E.json

function App() {

  const [rooms, setRooms] = useState([]);
  const [user, setUser]  =useState(JSON.parse(localStorage.getItem('user')));


  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
        setRooms(snapshot.docs.map((doc) => {
           return {id: doc.id, name: doc.data().name}
      }))
    })
  }

  const signOut = () => {
    auth.signOut().then(()=> {
      localStorage.removeItem('user');
      setUser(null);
    })
  }

 useEffect(() => {
  getChannels();
 }, [])

 //console.log("User in App state: ", user);

  return (
    <div className="App">
      <Router>
      {
        !user ?
        <Login setUser={setUser} />
        :
        <Container>

          <Header user={user} signOut={signOut} rooms={rooms} getChannels={getChannels}/>
          <Main>
              <Sidebar rooms={rooms} />
              <Routes>
                {/* <Route path="/room">
                  <Chat />
                </Route> */}
                <Route path="/room/:channelId" element={<Chat user={user}/>}></Route>
                <Route path="/" element={<Nochat />}></Route>
              </Routes>
          </Main>
        
        </Container>
      }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 42px minmax(0, 1fr);
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 360px auto;
`;

