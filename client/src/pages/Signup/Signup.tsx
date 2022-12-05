import { Alert, Box, CssBaseline, Typography } from '@mui/material'
import Container from '@mui/material/Container';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useUserAuth } from '../../context/Authprovider'
import userDataServices from '../../services/UserService'

function Signup() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')

    const [emailReg, setEmailReg] = useState<any>()
    const [passEx, setPassEx] = useState<any>()
    const [error, setError] = React.useState<string>("")
    const [message, setMessage] = useState<boolean>(false)
    const { signUp } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        const user = localStorage.getItem("email")
        user ? navigate('/') : navigate('/signup')
    }, [])

    const handleSubmit = async (e: any) => {
        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        setEmailReg(regEx)
        const nameEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        const passwordEx = /^(?=.*{8, 20})$/
        setPassEx(passwordEx)
        if (regEx.test(email) && nameEx.test(name) && password) {
            try {
                await signUp(email, password)
                const newUser = {
                    name,
                    email,
                }
                try {
                    await userDataServices.addUser(newUser)
                } catch (error) {
                    console.log("ERROR")
                }
                navigate('/login')
            } catch (error: any) {
                setError(error)
                e.preventDefault()
            }
        } else if (!regEx.test(email)) {
            setMessage(true)
            e.preventDefault()
        } else if (!nameEx.test(name)) {
            setMessage(true)
        } else if (!passwordEx.test(password)) {
            setMessage(true)
        }
        e.preventDefault();
    }
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
                                        <h1>SignUp</h1>
                                        <input type="text" placeholder="Name" defaultValue={name} onChange={(e: any) => setName(e.target.value)} />
                                        <Box sx={{ color: 'red' }}>{message && !name ? "Enter a valid Name" : ""}</Box>
                                        <input type="text" placeholder="Email" defaultValue={email} onChange={(e: any) => setEmail(e.target.value)} />
                                        <Box sx={{ color: 'red' }}>
                                            {message && !emailReg.test(email) ? "Enter a valid Email" : ""}
                                        </Box>
                                        <input type="password" placeholder="Password" defaultValue={password} onChange={(e: any) => setPassword(e.target.value)} />
                                        <Box sx={{ color: 'red' }}>
                                            {message && !password ? "Enter Password" : ''}
                                        </Box>
                                        <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-block btn-large">Login</button>
                                        {/* <Box sx={{ml:15}}> */}
                                        {/* <BeatLoader loading={loading} color="#FFFFFF" /> */}
                                        {/* </Box> */}

                                        <Box mt={2}> {error && <Alert severity="error">{error}</Alert>}</Box>
                                        <Typography sx={{ mt: 6, ml: 2, color: '#FFFFFF', }}>Already User ?<Link to={'/login'} style={{ textDecoration: 'none', color: "#FFFFFF" }}>login Now </Link> </Typography>
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

export default Signup