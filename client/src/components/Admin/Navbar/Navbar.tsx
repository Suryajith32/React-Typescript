import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAuth(event.target.checked);
    };
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
      navigate('profile')
    };
    const handleLogout=()=>{
      setAnchorEl(null);
      localStorage.removeItem('admin')
      navigate('/adminlogin')
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{background:'#1A374D'}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <Typography variant="h6" component="div">
            Home
          </Typography>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar