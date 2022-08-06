import {Component} from "react";
import * as React from 'react';
import {Avatar, Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";

class Dashbord extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            title: ''
        }

    }

    render() {
        const container = {
            width: "99vw",
            height: "99vh",
            /*color: "white",*/
            /*backgroundColor: "DodgerBlue",*/
        }

        const  body = {
            display:"flex",
            justifyContent:"space-evenly",
            alignItems:"center",
            width: "100%",
            height: "60vh",
        }

        const Products = (
            <React.Fragment>
                <CardContent>
                    <Typography variant={'h4'} gutterBottom>
                        Products : 0
                    </Typography>
                </CardContent>
            </React.Fragment>
        );

        const Cart = (
            <React.Fragment>
                <CardContent>
                    <Typography variant={'h4'} gutterBottom>
                        Cart : 0
                    </Typography>
                </CardContent>
            </React.Fragment>
        )

        const Users = (
            <React.Fragment>
                <CardContent>
                    <Typography variant={'h4'} gutterBottom>
                        Users : 0
                    </Typography>
                </CardContent>
            </React.Fragment>
        )

        return (
            <div style={container}>
                <Grid container lg={12} md={12} sm={12} xs={12} justifyContent={"space-evenly"} style={{backgroundColor:"lightblue"}} margin={1} padding={2}>
                        <Grid item lg={4} justifyContent={"flex-start"} alignItems={"center"} direction={"row"} display={"flex"}>
                            <Button variant="outlined">Dash</Button>
                        </Grid>
                        <Grid item lg={4} alignItems={"center"} justifyContent={"center"} direction={"row"} display={"flex"}>
                            <Button variant="outlined">Product</Button>
                            <Button variant="outlined">Cart</Button>
                        </Grid>
                        <Grid item lg={4} justifyContent={"flex-end"} alignItems={"center"} direction={"row"} display={"flex"}>
                            <Avatar>U</Avatar>
                            <Typography variant="h5" gutterBottom component="div">
                                User
                            </Typography>
                        </Grid>
                </Grid>
                <div style={body}>
                    <Card variant="outlined">{Products}</Card>
                    <Card variant="outlined">{Cart}</Card>
                    <Card variant="outlined">{Users}</Card>
                </div>
            </div>
        )
    }
}

export default Dashbord