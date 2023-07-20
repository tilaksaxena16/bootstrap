import React from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, Button, AppBar } from "@mui/material";
import { useState } from "react";

const MuiDemo = () => {
    const [userName, setUserName] = useState('');

    function handleNameChange(e) {
        setUserName(e.target.value)
    }


    return (
        <>
            <div className="container-fluid">
                <h3>Bootstrap</h3>
                <div className="w-25">
                    <label className="form-label">User Name</label>
                    <div>
                        <input className="form-control" type="text" onChange={handleNameChange} placeholder="Name in Block Letters" />
                    </div>
                    <div className="mt-2 mb-4">
                        <button className="btn btn-primary w-100">Login</button>
                    </div>
                </div>

                <h3 className="mt-4">MUI</h3>
                <div>
                    <TextField onChange={handleNameChange} label="User Name" variant="outlined" />
                </div>
                <div className="mt-3">
                    <Button color="error" variant="contained">Login</Button>
                </div>
                <h4>Hello ! {userName}</h4>
            </div>
            <div className="container-fluid">
                <h2>Date Picker</h2>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker />
                </LocalizationProvider>
            </div>
        </>
    )
}

export { MuiDemo }