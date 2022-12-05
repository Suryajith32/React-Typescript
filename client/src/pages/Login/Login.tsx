import React, { useEffect, useState } from 'react'
import { Alert, Box, CssBaseline, Typography } from '@mui/material'
import Container from '@mui/material/Container';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, } from '../../context/Authprovider'
import {useDispatch} from 'react-redux'
import { login } from '../../reducers/userReducer';

function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailReg, setEmailReg] = useState<any>()
  const [error, setError] = useState('');
  const [loading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { logIn } = useAuth()

  useEffect(() => {
    const user = localStorage.getItem("email")
    user ? navigate('/') : navigate('/login')
  }, [])

  const handleSubmit = async () => {
    setIsLoading(true)
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    setEmailReg(regEx)
    if (regEx.test(email)) {
      try {
        localStorage.setItem("email", email)
        dispatch(login(email))
        await logIn(email, password)
        navigate('/feed')
      } catch (error) {
        setError("Invalid Password ")
      }
    } else if (!regEx.test(email)) {
      setMessage(true)
    } else if (!password) {
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
                    <h1>Login</h1>
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
                    <Typography sx={{ mt: 6, ml: 2, color: '#FFFFFF', }}>New User ?<Link to={'/signup'} style={{ textDecoration: 'none', color: "#FFFFFF" }}>Sign up Now </Link> </Typography>
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

export default Login