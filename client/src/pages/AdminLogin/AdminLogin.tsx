import { Box, Container, CssBaseline, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function AdminLogin() {
    return (
        <>
            <CssBaseline />
            <Box sx={{ bgcolor: "#FFFFFF", width: '100%', height: '100vh', }}>
                <Container maxWidth="md">
                    <Box mt={4} >
                        <Box sx={{ bgcolor: "transparent", }}>
                            <Container maxWidth="xs">
                                <Box sx={{ borderRadius: 6, background: "#B1D0E0", height: '80vh' }} >
                                    <div className="login">
                                        <h1>Admin</h1>
                                        <input type="text" placeholder="Email" />
                                        <Box sx={{ color: 'red' }}>
                                            {/* {message && !emailReg.test(email)? "Enter a valid Email":""} */}
                                        </Box>
                                        <input type="password" placeholder="Password" />
                                        <Box sx={{ color: 'red' }}>
                                            {/* {message && !password?"Enter Password":''} */}
                                        </Box>
                                        <button type="submit" className="btn btn-primary btn-block btn-large">Login</button>
                                        {/* <Box sx={{ml:15}}> */}
                                        {/* <BeatLoader loading={loading} color="#FFFFFF" /> */}
                                        {/* </Box> */}

                                        {/* <Box mt={2}> {error && <Alert severity="error">{error}</Alert>}</Box> */}
                                        <Typography sx={{ mt: 6, ml: 2, color: '#FFFFFF', opacity: 0.5 }}>New User ?<Link to={'/signup'} style={{ textDecoration: 'none', color: "#FFFFFF" }}>Sign up Now </Link> </Typography>
                                    </div>
                                </Box>
                            </Container>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default AdminLogin