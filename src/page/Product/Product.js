

import {Component} from "react";
import {Autocomplete, Avatar, Button, Grid, TextField, Typography} from "@mui/material";
import File from "../../component/FileUpload";

class Product extends Component{

    constructor(props, context) {
        super(props, context);
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
                            Product Manage
                        </Typography>
                    </Grid>
                    <Grid item xs={8} lg={6}>
                        <TextField id="standard-basic" label="Title" variant="standard" fullWidth={true}/>
                    </Grid>
                    <Grid item xs={8} lg={6}>
                        <TextField id="standard-basic" label="Price" variant="standard" fullWidth={true}/>
                    </Grid>
                    <Grid item xs={8} lg={6}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            fullWidth={true}
                            renderInput={(params) => (
                                <TextField {...params} label="Category" variant="standard" />
                            )} options={''} />
                    </Grid>
                    <Grid item xs={8} lg={6}>
                        <TextField id="standard-textarea" label="Description" placeholder="Placeholder" multiline variant="standard" fullWidth={true}/>
                    </Grid>
                    <Grid item xs={8} lg={12} justifyContent={"flex-start"}>
                        <File/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} display={"flex"} justifyContent={"flex-end"} alignItems={"flex-end"} >
                        <Button variant="contained" color={"success"}>Clear</Button>
                        <Button variant="contained"  style={{marginLeft:"1rem"}}>Save</Button>
                    </Grid>
                </Grid>

            </div>
        )
    }
}

export  default Product