import {Component} from "react";
import {Alert, Button, Grid, Link, Snackbar, TextField, Typography} from "@mui/material";
import '@fontsource/roboto/700.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:'admin',
            password:'admin',
            credentials:{
                user:'',
                password:''
            },
            open: false,
            message: '',
            severity: ''
        }
    }
    checkCredentials(){
        console.table(this.state.credentials)

        let credential = this.state.credentials

        if (credential.user === this.state.user && credential.password === this.state.password) {
            this.setState({
                open: true,
                message: 'Login Success',
                severity:"success"
            })
        } else {
            this.setState({
                open: true,
                message: 'User Name or Passwords Error',
                severity:"error"
            })
        }

    }


    render() {
        const loginContainer = {
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100vw",
            height:"100vh",
            color: "white",
            backgroundColor: "DodgerBlue",
        };
        const grid = {
          height:"max-content",
          width: "70%"
        };

        return (
            <div  style={loginContainer}>
                <Grid container spacing={2} xs={12} sm={12} md={12} lg={12} style={grid}>
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <Typography variant="h3" gutterBottom component="div">
                            Login
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <TextField id="standard-basic" label="User Name" variant="standard"
                         onChange={
                             (event) => {
                                 let  credentials = this.state.credentials
                                 credentials.user = event.target.value
                                 this.setState({credentials})
                                 console.log(credentials)}
                         }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} lg={124} >
                        <TextField id="standard-basic" label="Password" variant="standard"
                         onChange={
                             (event)=>{

                                 let  credentials = this.state.credentials
                                 credentials.password = event.target.value

                                 this.setState({credentials})
                                 console.log(credentials)
                             }
                         }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} lg={124} >
                        <Button variant="contained" size={'large'}
                                onClick={() =>{
                                    this.checkCredentials()
                                }
                            }
                        >Login</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} lg={124} >
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Don't Have Account <Link to="/about" underline={"none"} style={{cursor:"pointer"} }>Register</Link> Now
                        </Typography>
                    </Grid>
                    <Snackbar
                        open={this.state.open}
                        autoHideDuration={6000}
                        onClose={() => {
                            this.setState({ open: false })
                        }}
                        message={this.state.message}
                    >
                        <Alert severity={this.state.severity} sx={{ width: '100%' }}  variant="filled">{this.state.message}</Alert>
                    </Snackbar>
                </Grid>
            </div>

        );
    }
}
 
export default Login;