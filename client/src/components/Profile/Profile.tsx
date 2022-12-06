import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './profile.css'
import { Avatar, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../../config/firebaseConfig/firebase';
import userDataServices from '../../services/UserService'
import { doc, updateDoc } from 'firebase/firestore';

function Profile() {
    const [currentUser,setCurrentUser] = React.useState<any[]>([])
    const [user,setUser] = React.useState<any[]>([])
    const [imageurl, setImageUrl] = React.useState<any>([])
    const [image, setImage] = React.useState<any>([])
    const [message, setMessage] = React.useState<any>([])

    React.useEffect(() => {
        const Thisuser:any = localStorage.getItem('email')
        setUser(Thisuser)
        userData()
    }, [])
    
    const userData = async () => {
        const unId = localStorage.getItem("email")
        const data = await userDataServices.getAllUser()
        const userData = data?.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        const fil = userData && userData?.filter((n:any) => n.email === unId)
        console.log('filll',fil)
        setCurrentUser(fil)
      }

     //IMAGE UPLOADING TO FIREBASE //

     const uploadImage = (e:any) => {
        const imageFile = e.target.files[0];
        console.log('image',imageFile)
        const storageRef = ref(storage, `Images/ &{Date.now()}-${imageFile.name}`)
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
        uploadTask.on('state_changed', (snapshot) => {
            const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, (error) => {
            console.log(error);
            setMessage('Error While upoading image')
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then(getDownloadURL => {
                setImageUrl(getDownloadURL)
                setMessage('Image Upload Succesfully')
                try {
      
                    const profileImage = getDownloadURL
                    updateDoc(doc(db, "users", currentUser[0]?.id), {
                      profileImage
                    });
                  } catch (error) {
                    console.log("ERROR")
                  }
            })
        })
    }
    
    return (
        <div className='profile-main-div'>
            <div>
                <Box sx={{ display: 'flex', mt: 5 }} alignItems="center"
                    justifyContent="center">
                    <Card sx={{ width: 500, height: 230 }} >
                        <Typography gutterBottom variant="h5" component="div">
                            PROFILE
                        </Typography>
                        <Box sx={{ display: 'flex' }} alignItems="center"
                            justifyContent="center">
                            <Avatar
                                alt="Remy Sharp"
                                src={currentUser[0]?.profileImage}
                                sx={{ width: 70, height: 70 }}
                            />
                        </Box>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            {user? user:'Username'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box sx={{ display: 'flex',ml:20}} alignItems="center"
                                justifyContent="center">
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Button variant="contained" component="label"
                                    
                                    onChange={uploadImage}>
                                        Upload Profile
                                        <input hidden accept="image/*" multiple type="file" />
                                    </Button>
                                </Stack>
                            </Box>

                        </CardActions>
                    </Card>
                </Box>
            </div>
        </div>
    )
}

export default Profile