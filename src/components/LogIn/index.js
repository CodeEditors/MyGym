import { React, useState } from 'react'
import { TextField, InputAdornment, makeStyles, Button, IconButton } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    textfield: {
        fontSize: "1.2em",
        textDecoration: "none",
        width: "100%",
        backgroundColor: "rgb(230,230,230)",
        marginBottom: "7%",
        padding: ".3em 1em",
        borderRadius: "6px",
        borderBottom: "none !important",
    },
    form: {
        margin: "10% auto",
        width: "70%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    submit: {
      backgroundColor: "rgb(1,121,145)",
      color: "white",
      padding: "0em 1.8em",
      marginTop: "5%",
      fontSize: "1.4em",
      fontWeight: "500",
      textTransformation: "none",
      borderRadius: "25px",
      "&:hover": {
        transition: "background-color 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
        backgroundColor: "rgb(1,77,92)"
      },
    }
}));

export default function LogIn() {
    const classes = useStyles()

    const [values, setValues] = useState({
      password: '',
      showPassword: false,
    });

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };


    return (
        <>
            <form className={classes.form}>
              <TextField 
                className={classes.textfield}
                placeholder="User ID"
                InputProps={{
                  disableUnderline: true,
                  endAdornment:(
                    <InputAdornment position="end">
                      <PersonIcon style={{ color: "rgb(1,121,145)"}} />
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                className= {classes.textfield}
                placeholder= "Password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                InputProps={{
                  disableUnderline: true,
                  endAdornment:(
                    <InputAdornment position="end">
                      <IconButton
                        style={{color:"rgb(1,121,145)"}}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <Button
                type="submit"
                variant="contained"
                className={classes.submit}
              >
                Submit
              </Button>
            </form>
        </>
    )
}