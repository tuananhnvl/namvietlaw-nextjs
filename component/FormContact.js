import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from '../styles/FormContact.module.css'

export default function FormContact() {
 
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
   <Box sx={{ display:'flex', flexDirection:'column', color:'white'}}>
     <TextField  sx={{ margin:' 0.5rem 0',backgroundColor: "white",borderRadius:"3px"}} label="Full Name" variant="filled" />
     <TextField  sx={{ margin:' 0.5rem 0',backgroundColor: "white",borderRadius:"3px"}}  label="Phone Number" variant="filled" />
     <TextField  sx={{ margin:' 0.5rem 0',backgroundColor: "white",borderRadius:"3px"}}   label="Mail" variant="filled" />
     <FormControl sx={{ margin:' 0.5rem 0',backgroundColor: "white",borderRadius:"3px"}} >
        <InputLabel variant="filled" id="demo-simple-select-label">Choose Services</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Choose Services"
          onChange={handleChange}
        >
          <MenuItem value={10}>Build Company</MenuItem>
          <MenuItem value={20}>Tax Company</MenuItem>
          <MenuItem value={30}>Another Services</MenuItem>
        </Select>
      </FormControl>
      <Button sx={{backgroundColor: "var(--orange)", marginTop:"1rem", height:"50px" }} variant="contained">Send to Us!</Button>
    </Box>
  );
}