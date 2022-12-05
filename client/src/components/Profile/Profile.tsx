import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './profile.css'
import { Avatar, Box } from '@mui/material';
import {useSelector} from 'react-redux'

function Profile() {
    const user = useSelector((state:any) => state.user.value)
    return (
        <div className='profile-main-div'> 
            <div>
                <Card sx={{ maxWidth: 345 }} >
                    <Typography gutterBottom variant="h5" component="div">
                        PROFILE
                    </Typography>
                    <Box sx={{ display: 'flex' }} alignItems="center"
                        justifyContent="center">
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 56, height: 56, }}
                        />
                    </Box>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.email}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Upload image</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default Profile