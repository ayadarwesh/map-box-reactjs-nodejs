import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {AppBar, Toolbar} from "@mui/material";
import {setUser} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                aya mostafa
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

// @ts-ignore
export default function Layout({children}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state:any) => state.auth.user)
    const isAuth = useSelector((state:any) => state.auth.isAuth)

    const logoutHandler = ()=>{
        localStorage.removeItem('user');
        dispatch(setUser(''))
        navigate('/login');
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <CssBaseline />
                <AppBar
                    position="absolute"
                    color="default"
                    elevation={0}
                    sx={{
                        position: 'relative',
                        borderBottom: (t) => `1px solid ${t.palette.divider}`,
                    }}
                >
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                           Mapbox&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Typography>

                        {(user || isAuth) && <>
                         <Link href="/users">Users</Link> &nbsp;&nbsp;&nbsp;
                         <Link href="/map">Map</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <Link href="#" onClick={logoutHandler}>Logout</Link>
                        </>
                        }
                    </Toolbar>
                </AppBar>
                <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                    {children}
                </Container>
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[800],
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography variant="body1">
                           This is mapbox app
                        </Typography>
                        <Copyright />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
