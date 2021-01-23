import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, Table, TableHead, TableRow, TableBody, TableCell} from '@material-ui/core';
import './Leaderboard.css';
import logo from './trophy-removebg-preview.png';

function createData(place, name, points) {
  return { place, name, points };
}

const rows = [
  createData(1, 'Johnny', 475),
  createData(2, 'Karen', 324),
  createData(3, 'Jack', 245),
  createData(4, 'Eric', 233),
  createData(5, 'Lance', 124),
];

 const StyledTableCell = withStyles((theme) => ({
  head: {
     backgroundColor: theme.palette.common.black,
     color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


function Leaderboard(){
  return(
    <div className="leaderboard">

    <img
      className='leaderboard_logo'
      src={logo}
      alt='logo'
    />
    <h1> Leaderboard </h1>
      <div className="list">


       <Card>
         <CardContent>
           <Table>
             <TableHead>
               <TableRow>

                <TableCell style={{fontWeight: 'bold'}}> Place </TableCell>
                 <TableCell style={{fontWeight: 'bold'}}> Name </TableCell>
                 <TableCell style={{fontWeight: 'bold'}}> Points </TableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {rows.map((row) => (
                 <StyledTableRow id={row.place} key={row.place}>
                     <TableCell component="th" scope="row">
                       {row.place}
                     </TableCell>
                     <TableCell component="th" scope="row">
                       {row.name}
                     </TableCell>
                     <TableCell component="th" scope="row">
                       {row.points}
                     </TableCell>
                 </StyledTableRow>
               ))}
             </TableBody>
           </Table>
         </CardContent>
       </Card>
      </div>
    </div>
    //  <List>
    //  <ListItemText primary="#1 Johnny 475 Points" />
    //   <ListItemText primary="#2 Karen 324 Points" />
    //   <ListItemText primary="#3 Jack 245 Points" />
    //   <ListItemText primary="#4 Eric 233 Points" />
    //   <ListItemText primary="#5 Lance 124 Points" />
    //
    // </List>
  )
}

export default Leaderboard;
