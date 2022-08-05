import {Component} from "react";
import {Button, Grid, Link, TextField, Typography} from "@mui/material";
import '@fontsource/roboto/700.css';


class Login extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
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
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} lg={124} >
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} lg={124} >
                        <Button variant="contained" size={'large'}>Login</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} lg={124} >
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Don't Have Account <Link to="/about" underline={"none"} style={{cursor:"pointer"} }>Register</Link> Now
                        </Typography>
                    </Grid>

                </Grid>
            </div>

        );
    }
}
 
export default Login;