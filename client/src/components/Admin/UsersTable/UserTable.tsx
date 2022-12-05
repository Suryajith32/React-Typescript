import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import userDataServices from '../../../services/UserService'
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux'
import {open,User} from '../../../reducers/userReducer'



export default function BasicTable() {
  const [users,setUsers] = React.useState<any[]>([])
  
  const dispatch = useDispatch()
  const isMoadalOpen = useSelector((state: any) => state.user.value.isOpen);
  const SearchkeyWord = useSelector((state: any) => state.user.value.searchKey);

  React.useEffect(() => {
    getUsers()
    console.log(SearchkeyWord,"hdgfhdgf")
  }, [isMoadalOpen,SearchkeyWord])

  const getUsers = async () => {
    const data:any = await userDataServices.getAllUser();
    setUsers(data.docs.map((doc:any) => ({ ...doc.data(), id: doc.id })))
}

const handleDelete = (item:string) => {
  dispatch(User(item))
  dispatch(open(true))
  console.log(item,'hello')
}
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users?.filter((item:any,) => {
                                    return SearchkeyWord.toLowerCase() === ''
                                        ? item : item.name.toLowerCase().includes(SearchkeyWord)
                                }).map((doc,index:number) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {doc.name}
              </TableCell>
              <TableCell align="right">{doc.email}</TableCell>
              <TableCell align="right"><Button onClick={(e:any) => handleDelete(doc)} variant="outlined" color="error">
                Delete
              </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}