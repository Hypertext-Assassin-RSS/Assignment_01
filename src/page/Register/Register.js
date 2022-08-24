import {Component} from "react";
import {
    Button,
    Grid,
    Snackbar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";
import CustomerService from "../../Services/CustomerService";

class Register extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            formData: {
                email: '',
                username: '',
                password: '',
                name: {
                    firstname: '',
                    lastname: ''
                },
                address: {
                    city: '',
                    street: '',
                    number: '',
                    zipcode: '',
                    geolocation: {
                        lat: '',
                        long: ''
                    }
                },
                phone: ''
            }
        }

    }

    clear = () => {
        this.setState({
            formData: {
                email: '',
                username: '',
                password: '',
                name: {
                    firstname: '',
                    lastname: ''
                },
                address: {
                    city: '',
                    street: '',
                    number: '',
                    zipcode: '',
                    geolocation: {
                        lat: '',
                        long: ''
                    }
                },
                phone: '',
                open: false,
                deleteId: ''
            }
        });
    }

    submitUser = async () => {
        let data = this.state.formData
        let res = await CustomerService.Register(data);
        if (res.status === 200) {
            this.clear();
            this.setState({
                alert: true,
                message: 'Register Success!',
                severity: 'success'
            });
        } else {
            this.setState({
                alert: true,
                message: 'Register Failed..!',
                severity: 'warning'
            });
        }
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            alert: false,
        });
    };





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
                <Grid container spacing={2} lg={10}  md={12} sm={12} xs={12} >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h3" gutterBottom component="div">
                            Create New Account
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="First Name" variant="outlined"
                                   value={this.state.formData.name.firstname}
                                   onChange={(e) => {
                                       let data = this.state.formData.name
                                       data.firstname = e.target.value
                                       this.setState({data});
                                   }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Last Name" variant="outlined"
                                   value={this.state.formData.name.lastname}
                                   onChange={(e) => {
                                       let data = this.state.formData.name
                                       data.lastname = e.target.value
                                       this.setState({data});
                                   }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Email" variant="outlined"
                                   value={this.state.formData.email}
                                   onChange={(e) => {
                                       let data = this.state.formData
                                       data.email = e.target.value
                                       this.setState({data});
                                   }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="User Name" variant="outlined"
                                   value={this.state.formData.username}
                                   onChange={(e) => {
                                       let data = this.state.formData
                                       data.username = e.target.value
                                       this.setState({data});
                                   }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Password" type={"password"} variant="outlined"
                                   value={this.state.formData.password}
                                   onChange={(e) => {
                                       let data = this.state.formData
                                       data.password = e.target.value
                                       this.setState({data});
                                   }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="City" variant="outlined"
                                   value={this.state.formData.address.city}
                                   onChange={(e) => {
                                       let data = this.state.formData.address
                                       data.city = e.target.value
                                       this.setState({data});
                                   }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Street" variant="outlined"
                                   value={this.state.formData.address.street}
                                   onChange={(e) => {
                                       let data = this.state.formData.address
                                       data.street = e.target.value
                                       this.setState({data});
                                   }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Street No" variant="outlined"
                                   value={this.state.formData.address.number}
                                   onChange={(e) => {
                                       let data = this.state.formData.address
                                       data.number = e.target.value
                                       this.setState({data});
                                   }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Zip Code" variant="outlined"
                                   value={this.state.formData.address.zipcode}
                                   onChange={(e) => {
                                       let data = this.state.formData.address
                                       data.zipcode = e.target.value
                                       this.setState({data});
                                   }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Lat Value" variant="outlined"
                                   value={this.state.formData.address.geolocation.lat}
                                   onChange={(e) => {
                                       let data = this.state.formData.address.geolocation
                                       data.lat = e.target.value
                                       this.setState({data});
                                   }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Long Value" variant="outlined"
                                   value={this.state.formData.address.geolocation.long}
                                   onChange={(e) => {
                                       let data = this.state.formData.address.geolocation
                                       data.long = e.target.value
                                       this.setState({data});
                                   }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="outlined-basic" fullWidth={true} label="Mobile No" variant="outlined"
                                   value={this.state.formData.phone}
                                   onChange={(e) => {
                                       let data = this.state.formData
                                       data.phone = e.target.value
                                       this.setState({data});
                                   }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}  display={"flex"} justifyContent={"flex-end"} marginBottom={2}>
                        <Button variant="contained" color={"warning"} onClick={this.clear}>Clear</Button>
                        <Button variant="contained" style={{marginLeft:"1rem"}}
                        onClick={() => {
                            this.submitUser()
                        }}
                        >Register</Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2} lg={10}  md={12} sm={12} xs={12}>
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
                <Snackbar
                    open={this.state.alert}
                    autoHideDuration={2000}
                    onClose={this.handleClose}
                    message={this.state.message}
                    severity={this.state.severity}
                />
            </div>
        )
    }
}


export default Register