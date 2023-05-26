import React, { useState } from "react";
import { Stack, IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searcher = (props) => {
  
  const { setInputUser } = props;
  
  const [valueInput, setValueInput] = useState('');

  const onSearchValueChange = (event) =>{
    const inputValue = event.target.value;
    setValueInput()
  }
 /* Va mandar el valor despues que le damos al busador*/
  const handleSubmit = () =>{
    setInputUser(valueInput); 
  }

  return (
    <Stack
      direction='row'
      sx={{
        marginTop: '30px',
        width: '80%' 
      }}
    >
      <TextField
        id="outlined-basic" 
        label="Github User"
        placeholder="Octocat" 
        variant ="outlined"
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width:'90%'

        }}  
      />

      
      <IconButton
        onclick={handleSubmit}
        size="small"
        sx={{
          left:'-45px'

        }}

      >
        <SearchIcon/>
      </IconButton>
    </Stack>
  );
};

export default Searcher;