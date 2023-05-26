import React from "react";
import {CardMedia, Grid, Stack} from '@mui/material';
import PrincipalInformation from "../../components/PrincipalInformation";
import Description from "../Description"

const UserCard = (props) =>{
  const { userState } = props;
  const { avatar_url } = userState;


  return(
    <Grid 
      container 
      spacing={2}
      sx={{marginTop:"15px"}}
    >
      <Grid item xs={3}>
        <CardMedia 
          component="img"
          alt="GitHubUser"
          image={avatar_url}
          sx={{
            borderRadius:'50%',
            marginLeft:'5px'
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack
          directions='column'
          spacing={1}

        >
          <PrincipalInformation userState={userState}/>
          <Description userState={userState}/> 
        </Stack>
      </Grid>           
    </Grid>
  )
}

export default UserCard;