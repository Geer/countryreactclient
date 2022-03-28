import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import axios from 'axios';

function ComboBox() {

  const [locations, setLocations] = useState([]);

    async function checkLength(value) {
      if (value.length > 3) {
        const apiURL = `http://localhost:8080/locations/countries/find?name=${value}`;
        await axios.get(apiURL)
        .then(response => {
          console.log(`response: ${response.data.map(location => location)}`);
          setLocations(response.data);
          //setLocations(response.data);
        }).catch(function(error) {
          console.log(error);
        });
      }
    }

  return (
    <Autocomplete
      disablePortal
      id="combo-box"
      options={locations}
      onInputChange={(e) => checkLength(e.target.value)}
      getOptionLabel={(option) => option.path}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.path}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}
 

export default ComboBox;