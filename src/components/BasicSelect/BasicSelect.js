import React from "react"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [data, setData] = React.useState('');

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 130, backgroundColor: "rgb(160, 217, 168)"}}>
        <InputLabel id="demo-simple-select-autowidth-label">Availability</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={data}
          onChange={handleChange}
          autoWidth
          label="Data"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"available"}>Available</MenuItem>
          <MenuItem value={"claimed"}>Claimed</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
