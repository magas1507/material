import React from "react";
import {Stack, Typography} from "@mui/material";

import PaperInformation from "../../components/PaperInformation";
import LocationInformation from "../../components/LocationInformation";

const Description = (props) =>{
  const { userState } = props;
  const { bio } = userState;

  return(
    <>
      <Stack sx={{justifyContent:'center'}}>
        {bio !== null
          ? <Typography variant="body1"> {bio}</Typography>
          : <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim dignissimos </Typography>
        }
      </Stack>
      <PaperInformation  userState =  {userState} />
      <LocationInformation userState =  {userState}/>
    </>
  )
}

export default Description;