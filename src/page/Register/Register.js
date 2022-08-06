import {Component} from "react";
import {
    Button,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";

class Register extends Component{
    constructor(props, context) {
        super(props, context);
    }


    render() {
        const RegisterContainer = {
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
            <div style={RegisterContainer}>
                <Grid container spacing={2} lg={12}  md={12} sm={12} xs={12} >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h3" gutterBottom component="div">
                            Create New Account
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="First Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Last Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Email" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="User Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Password" type={"password"} variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="City" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Street" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Street No" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Zip Code" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Lat Value" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Long Value" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Mobile No" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}  display={"flex"} justifyContent={"flex-end"} marginBottom={1}>
                        <Button variant="contained" color={"warning"}>Clear</Button>
                        <Button variant="contained" style={{marginLeft:"1rem"}}>Register</Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2} lg={12}  md={12} sm={12} xs={12}>
                    <TableContainer >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>First Name</TableCell>
                                    <TableCell >Last Name</TableCell>
                                    <TableCell >Email</TableCell>
                                    <TableCell >User Name</TableCell>
                                    <TableCell >Password</TableCell>
                                    <TableCell >City</TableCell>
                                    <TableCell >Street</TableCell>
                                    <TableCell >Street No</TableCell>
                                    <TableCell >Zip Code</TableCell>
                                    <TableCell >Lat Value</TableCell>
                                    <TableCell >Long Value</TableCell>
                                    <TableCell >Mobile No</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Grid item xs={12} sm={12} md={12} lg={12} display={"flex"} justifyContent={"flex-end"} alignItems={"flex-end"} marginBottom={0.5}>
                        <Button variant="contained" color={"secondary"}>Update</Button>
                        <Button variant="contained" color={"error"} style={{marginLeft:"1rem"}}>Delete</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Register