import { Alert, Box, Container, CssBaseline, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userDataServices from '../../services/UserService'

function AdminLogin() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<any>('')
    const [error, setError] = useState<String>('')
    const [message, setMessage] = useState<boolean>(false)
    const [emailReg, setEmailReg] = useState<any>()
    const navigate = useNavigate();

    const handleSubmit = async (e:any) => {
        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        setEmailReg(regEx)
        if (regEx.test(email)) {
          try {
            console.log('hi')
            const unId = localStorage.getItem("email")
            const data = await userDataServices.getAllUser()
            const userData = data?.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            const fil = userData && userData?.filter((n:any) => n.emaiil === email)
            console.log('hii')
            if (fil && fil?.filter((n:any) => n.isAdmin === true)) {
              localStorage.setItem("admin", email)
              console.log('hiii')
              navigate('/admin/dashboard')
            } else {
              navigate('/adminlogin')
            }
          } catch (error) {
            console.log(error)
            setError("do not have Authorization")
          }
        } else if (!regEx.test(email)) {
            console.log('hiii')
          setMessage(true)
        } else if (!password) {
            console.log('hii')
          setMessage(true)
        }
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
                                        <h1>Admin</h1>
                                        <input type="text" placeholder="Email" defaultValue={email} onChange={(e: any) => setEmail(e.target.value)} />
                                        <Box sx={{ color: 'red' }}>
                                            {message && !emailReg.test(email)? "Enter a valid Email":""}
                                        </Box>
                                        <input type="password" placeholder="Password" defaultValue={password} onChange={(e: any) => setPassword(e.target.value)} />
                                        <Box sx={{ color: 'red' }}>
                                            {message && !password?"Enter Password":''}
                                        </Box>
                                        <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-block btn-large">Login</button>
                                        {/* <Box sx={{ml:15}}> */}
                                        {/* <BeatLoader loading={loading} color="#FFFFFF" /> */}
                                        {/* </Box> */}

                                        <Box mt={2}> {error && <Alert severity="error">{error}</Alert>}</Box>
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