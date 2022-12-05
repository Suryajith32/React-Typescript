import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'

function Home() {
  return (
    <div>
      <Header />
      <Box sx={{display:'flex',mt:5}} alignItems="center"
        justifyContent="center">
       
      </Box>

    </div>
  )
}

export default Home