import React from "react";
import {Paper, Stack, Typography } from "@mui/material"


const PaperInformation = (props) =>{
  const { userState } = props 
  const { public_repos, followers, following}  = userState;

  return(
    <Paper elevation={3}>
      <Stack spacing={3} direction={'row'}  sx={{justifyContent:'space-evenly', margin:'20px'}}>
        <Stack>
          <Typography variant="h5">Repos</Typography>
          <Typography variant="h6">{public_repos}</Typography>
        </Stack>
        <Stack>
        <Typography variant="h5">Follower</Typography>
          <Typography variant="h6">{followers}</Typography>
        </Stack>
        <Stack>
          <Typography variant="h5">Followin</Typography>
          <Typography variant="h6">{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  )

}

export default PaperInformation;

