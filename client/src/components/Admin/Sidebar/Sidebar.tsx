import { Box, FormControlLabel, FormGroup, Switch, Typography } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SidebarData } from './SidebarData'
import { NavLink } from 'react-router-dom'
import { Opacity } from '@mui/icons-material';


function Sidebar() {
    return (
        <>
        <Box
          flex={0.8}
          sx={{ display: { xs: "block", sm: "block", }, overflow: 'hidden', background: "#406882" }}
        >
          <Box position="fixed" bgcolor="black" flex={0.8} sx={{ width: "16.5%", height: "100vh",  background: "#406882", Opacity:0.2 }} >
            <nav aria-label="main mailbox folders">
              <Typography style={{ fontWeight: 600, color: "#FFFFFF", opacity: 0.5 }} sx={{
                ml: 1, mt: 5, display: { xs: "none", sm: "none", md: "block", zIndex: 'tooltip', }
              }}>
                Menu
              </Typography>
              <List sx={{ color: "#FFFFFF", pt: 2 }}>
                {SidebarData.map((item, index) => (
                  <NavLink style={{ textDecoration: 'none', fontWeight: 600, color: "#FFFFFF", }} to={item.path}>
                    <ListItem key={index} disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ color: "#FFFFFF" }}>
                          {item.icon}
                        </ListItemIcon >
                        <ListItemText sx={{ display: { xs: "none", sm: "none", md: "block", zIndex: 'tooltip', } }} primary={item.title} />
                      </ListItemButton>
                    </ListItem>
                  </NavLink>
                ))}
              </List>
            </nav>
            
          </Box>
        </Box>
      </>
    )
}

export default Sidebar