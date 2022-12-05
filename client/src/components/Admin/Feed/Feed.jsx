import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Feed() {
  return (
    <div>
         <Box
        flex={4}>
        <Outlet />
      </Box>
    </div>
  )
}

export default Feed