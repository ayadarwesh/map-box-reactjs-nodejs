import React, {useEffect, useState} from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {login, setUser} from '../redux/actions';


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector((state:any) => state.auth.isAuth)
    const [email,setEmail] = useState('');
    useEffect(()=>{if(isAuth){
        alert('Successfully Logged In.');
        dispatch(setUser(email))
        setTimeout(()=> navigate('/users'), 1000)}
    },[isAuth])
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if(data.get('email') && data.get('password')){
            // @ts-ignore
            setEmail(  data.get('email'));
                dispatch(login({
                    email:  data.get('email')  ,
                    password: data.get('password')
                }))
        }else{
            alert("Please, Make sure you're entered all required fields")
        }

    };


    return (<Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
        <Typography component="h1" variant="h5">
            Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign In
            </Button>
        </Box>
    </Box>
)
}

export default Login
