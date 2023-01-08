import React from 'react'
import styled from 'styled-components'
import {auth, provider} from '../firebase'

function Login(props) {

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
        }
        localStorage.setItem('user', JSON.stringify(newUser));
        props.setUser(newUser);
    })
    .catch((error) => {
      alert(error.message)
    })
  }

  return (
    <Container>
      <Content>
        <SlackImg src="https://static.vecteezy.com/system/resources/previews/011/588/660/original/house-with-bell-icon-free-vector.jpg"  />
        <h2>Sign in </h2>
        <h1>HomeRoom</h1>
        <SignInButton onClick={() => signIn()}>
          Sign in with Google
        </SignInButton>
      </Content>
    </Container>
  )
}

export default Login

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(85,162,176,0.25);
  background-image: url("https://www.transparenttextures.com/patterns/concrete-wall.png");
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.95;

`
const Content = styled.div`
  height: 70vh;
  width: 16%;
  padding:  20px 70px;
  background-color: white;
  border-radius: 14px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${'' /* box-shadow: 0 1px 3px rgb(0 0 0 /12%), 0 1px 2px rgb(0 0 0 / 24%);  */}
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 20px;
  }
`
const SlackImg = styled.img`
  height: 140px;
  padding-bottom: 100px;
`

const SignInButton = styled.button`
  margin-top: 40px;
  padding: 14px 20px;
  background-color: #0a8d48;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;

  :hover {
    opacity: 0.9;
  }
`