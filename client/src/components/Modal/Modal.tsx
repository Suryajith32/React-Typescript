import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import userDataServices from '../../services/UserService'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import {open} from '../../reducers/userReducer'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const dispatch = useDispatch()
  const isMoadalOpen = useSelector((state: any) => state.user.value.isOpen);
  const selectedUser = useSelector((state: any) => state.user.value.userData);
  const handleClose = () => dispatch(open(false));

  React.useEffect(() => {
    console.log(selectedUser, 'userData')
  }, [isMoadalOpen])

  const handleDelete =async()=>{
   await userDataServices.deleteUser(selectedUser?.id)
   dispatch(open(false))
   alert('successfully Deleted')
  }

  return (
    <div>
      <Modal
        open={isMoadalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete User
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            do you want to Delete {selectedUser?.email}
          </Typography>
          <Box sx={{mt:3,ml:5}}>
              <Button onClick={handleDelete} variant="outlined" color="error">
            Confirm
          </Button>
          <Button onClick={handleClose} sx={{ml:5}} variant="outlined" >
            Decline
          </Button>
          </Box>
        
        </Box>
      </Modal>
    </div>
  );
}