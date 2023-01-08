import React from 'react'
import styled from 'styled-components'


function Nochat() {

  return (
    <Container>
        <h1>Select or Create a room</h1>
        <img src={process.env.PUBLIC_URL+"vecteezy_searching-for-inspiration-with-man-hold-telescope-and-sitting-on-plane_.jpg"} />
        </Container>
  )
}

export default Nochat

const Container = styled.div`
  font-size: 26px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 300px;
    height: 250px;
  }

  h1 {
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 22px;
  }
`