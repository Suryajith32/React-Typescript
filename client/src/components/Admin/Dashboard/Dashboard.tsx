import { Box } from '@mui/system'
import React from 'react'
import UserTable from '../UsersTable/UserTable'
import SearchField from '../../SearchField/SearchField'
import { Typography } from '@mui/material'
import Modal from '../../Modal/Modal'

function Dashboard() {
  return (
    <>
      <Box sx={{ ml: 30, mr: 5, mt: 5 }}>
        <SearchField />
        <Box sx={{ mt: 5 }}>
          <UserTable />
        </Box>
      </Box>
      <Modal/>
    </>
  )
}

export default Dashboard