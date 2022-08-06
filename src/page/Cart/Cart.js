import {Component} from "react";
import {Autocomplete, Button, Grid, TextField, Typography} from "@mui/material";
import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BasicDatePicker from "../../component/Date";

class Cart  extends Component{

    constructor(props, context) {
        super(props, context);
        this.state={
            value:0
        }
    }
     showDate ()  {
        alert(this.state.value)
    }



    render() {
        const Container = {
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:'column',
            width:"100vw",
            height:"100vh",
            color: "white",
            backgroundColor: "DodgerBlue",
        }


        return(
            <div style={Container}>
                <Grid container spacing={2} lg={10}>
                    <Grid item xs={8} lg={12}>
                        <Typography variant="h3" gutterBottom component="div">
                            Cart Manager
                        </Typography>
                    </Grid>
                    <Grid item xs={8} lg={6}>
                        <Autocomplete
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            renderInput={(params) => (
                                <TextField {...params} label="disableCloseOnSelect" variant="standard" />
                            )}
                        />
                    </Grid>
                    <Grid item xs={8} lg={6}>
                        {/*<BasicDatePicker/>*/}
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date"
                                value={this.state.value}
                                onChange={(newValue) => {
                                    this.setState(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} fullWidth={true}/>}
                            />
                        </LocalizationProvider>

                    </Grid>
                    <Grid item xs={8} lg={6}>
                        <Autocomplete
                            id="disable-close-on-select"
                            disableCloseOnSelect
                            renderInput={(params) => (
                                <TextField {...params} label="disableCloseOnSelect" variant="standard" />
                            )}
                        />
                    </Grid>
                    <Grid item xs={8} lg={6}>
                        <TextField id="standard-basic" label="Standard" variant="standard" fullWidth={true}/>
                    </Grid>
                    <Grid item xs={8} lg={12} justifyContent={"flex-end"} alignItems={"center"} display={"flex"}>
                        <Button variant="contained" color={"success"}>Clear</Button>
                        <Button variant="contained"  style={{marginLeft:"1rem"}}>Save</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Cart