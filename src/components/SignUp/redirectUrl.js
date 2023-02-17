import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import '../../asset/css/otp.css'
import axios from 'axios';


const theme = createTheme();

export default function RedirectURL() {

    const queryParams = new URLSearchParams(window.location.search);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        axios.post('http://192.168.43.201:5000/developer/redirectUrls', {
            devId: queryParams.get('devId'),
            signUpRedirectUrl: data.get('signUpRedirectUrl'),
            loginSuccessUrl: data.get('loginSuccessRedirectUrl'),
            loginFailureUrl: data.get('loginFailureRedirectUrl'),
        })
            .then((value) => {
                console.log(value)
            })
            .catch((err) => console.log(err));
        alert("Added to database")
    };

    return (
        <div className='full-screen bg-home2'>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {/*<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>*/}
                        {/*    <LockOutlinedIcon />*/}
                        {/*</Avatar>*/}
                        <Typography component="h1" variant="h5">
                            Redirect URLs
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="signUpRedirectUrl"
                                        label="Sign Up Redirect Url"
                                        type="text"
                                        id="signUpRedirectUrl"
                                        placeholder="Sign Up Redirect Url"
                                    // {...register("userName", { required: true, maxLength: 80 })}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="loginSuccessRedirectUrl"
                                        type="text"
                                        label="Login Success Redirect Url"
                                        name="loginSuccessRedirectUrl"
                                        placeholder="Login Success Redirect Url"
                                    // {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="loginFailureRedirectUrl"
                                        label="Login Failure Redirect Url"
                                        type="text"
                                        id="loginFailureRedirectUrl"
                                        placeholder="Login Failure Redirect Url"
                                    // {...register("password", { required: true, minLength: 8 })}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}>
                                Redirect URLs
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}