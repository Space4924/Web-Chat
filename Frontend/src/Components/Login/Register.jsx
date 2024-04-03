
import { Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React, { useState } from 'react'

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import './FileInput.css';
import { userData } from '../../service/api';

const defaultTheme = createTheme();
const Register = () => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event.target.value);
        const data = new FormData(event.currentTarget);
        // console.log(data);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            name: data.get('name'),
            file: data.get('file')
        });
        await userData({data, config});


    };

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(URL.createObjectURL(file));
        console.log('Selected file:', file);
        // You can add further handling of the selected file here
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="sm" >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required={true}
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
                            name="name"
                            label="name"
                            id="name"
                            autoComplete="name"
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
                        <div style={{ textAlign: 'center', display: "flex", margin: "20px 0", alignItems: "center" }}>
                            <input
                                name='file'
                                accept="image/*"
                                id="contained-button-file"
                                type="file"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            <label htmlFor="contained-button-file">
                                <Button
                                    variant="contained"
                                    component="span"
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Upload Photo
                                </Button>
                            </label>
                            {selectedFile && (
                                <img src={selectedFile} alt="Selected" style={{ maxWidth: '200px', marginLeft: "auto" }} />
                            )}
                        </div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        {/* <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In with Google
                        </Button> */}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Register
