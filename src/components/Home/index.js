import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Background from './background.jpg'
import Title from '../../Title.jpg'
import LogIn from '../LogIn/index'
import SignUp from '../Signup/index'
import $ from 'jquery'
import { LinearScale } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh"
    },
    title: {
        // display: "block",
        margin: "7% auto 5%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    btngrp: {
        // display: "tables",
        // margin: "auto",
        float: "left",
        alignContent: "center",
        border: "1px solid rgb(1,121,145)",
    },
    bimage: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.7,
        boxShadow: "inset 5px 0 15px, inset -5px 0 15px 5px ,inset 0 5px 15px ,inset 0 -5px 15px"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    loginActive: {
        backgroundColor: "rgb(1,121,145)",
        padding : ".3em 3.2em",
        color: "white",
        fontSize: "1.2em",
        border: "none",
        borderRadius: "0 6px 6px 0",
        cursor: "pointer",
        transition: "background-color 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"   
    },
    signupActive: {
        backgroundColor: "rgb(1,121,145)",
        padding : ".3em 3.2em",
        color: "white",
        fontSize: "1.2em",
        border: "none",
        borderRadius: "6px 0 0 6px",
        cursor: "pointer",  
        transition: "background-color 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"   
    },
    loginUn: {
        backgroundColor: "white",
        padding : ".3em 3.2em",
        color: "rgb(1,121,145)",
        border: "none",
        fontSize: "1.2em",
        boxSizing: "border-box",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "rgb(211,211,211)",
            transition: "background-color 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
        },
    },
    signupUn: {
        backgroundColor: "white",
        padding : ".3em 3.2em",
        color: "rgb(1,121,145)",
        border: "none",
        fontSize: "1.2em",
        boxSizing: "border-box",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "rgb(211,211,211)",
            transition: "background-color 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
        },
        
        // "&::before":{
        //     content: "",
        //     "&&:active": {
        //         content: '',
        //         // position: 'absolute',
        //         // top: "0",
        //         // left: "0",
        //         // right: "0",
        //         // bottom: "0",
        //         backgroundColor: "rgb(1,121,145)",
        //         color: "white",
        //         transition: "transform 100ms ease-out",
        //         transform: "scaleX(0)",
        //         transformOrigin: "left" 
        //     }
        // }
    }
  }));

export default function Home() {

    const classes= useStyles()

    let [signupClass,setSignupClass] = useState(classes.signupUn)
    let [loginClass,setLoginClass] = useState(classes.loginActive)
    let [compo,setComponent] = useState("Login")

    // useEffect(()=>{
    //     if(login==="active") {
    //         document.getElementById("log-in").classList.add(classes.loginActive)
    //     }
    //     if(login==="un") {
    //         document.getElementById("log-in").classList.add(classes.loginUn)
    //     }
    //     if(signup==="active") {
    //         document.getElementById("log-in").classList.add(classes.signupActive)
    //     }
    //     if(signup==="un") {
    //         document.getElementById("log-in").classList.add(classes.signupUn)
    //     }
    // })

    

    return (
        <>
            <Grid container spacing={0} className={classes.root}>
                <Grid item xs={12} sm={7} md={7} className={classes.bimage} />
                <Grid item xs={12} sm={5} md={5} className={classes.content}>
                    <img src={Title} className={classes.title} />

                    <div className={classes.btngrp}>
                        <button className={loginClass} onClick={e=>{
                                setSignupClass(signupClass=classes.signupUn)
                                setLoginClass(loginClass=classes.loginActive)
                                setComponent(compo="Login")
                                }
                            }>Login</button>
                        <button className={signupClass} 
                            onClick={e=>{
                                setSignupClass(signupClass=classes.signupActive)
                                setLoginClass(loginClass=classes.loginUn)
                                setComponent(compo="Signup")
                                }
                            }>Signup</button>
                    </div>
                    {(compo==="Login") ?
                        <LogIn style={{ transition: "all 1000ms" }} /> :
                        <SignUp style={{ transition: "all 1000ms" }} />
                    }

                </Grid>
            </Grid>
        </ >
    )
}
