import { useState, useEffect } from 'react';
import { Container } from '@mui/material'

import  Searcher from  './components/Searcher';
import UserCard from "./containers/UserCard";

import { getGitHubUser } from './services/users';


function App() {
 
  const [inputUser, setInputUser] = useState('octocat');//state initial
  const [userState, setUserState] = useState('inputUser');// como vamos a manipular toda la respuesta de la peticion
  const [notFound, setNotFound] = useState('false')

  const gettinUser = async (user) => {
    const userResponse = await getGitHubUser(user)

    if(userState === 'octocat'){
      localStorage.setItem('octocat', userResponse)
    }

    if(userResponse.message === 'Not Found'){
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }

  };
  useEffect(() => {
    //initial state
    gettinUser(inputUser)
  },[inputUser])
  return (
    <Container sx={{
      background: "whitesmoke",
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

    }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser}/>
      <UserCard userState={userState}/>
    </Container>    
  )
}

export default App;
