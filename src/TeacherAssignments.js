import * as React from 'react';
import {Card, CardContent, Table, TableHead, TableRow, TableBody, TableCell, TextField} from '@material-ui/core';
import './TeacherAssignments.css';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';


function createData(name, points, submitted) {
  return { name, points, submitted };
}

const rows = [
  createData('Math Worksheet', 10, 25),
  createData('Vocab Worksheet', 10, 20),
  createData('Read Book', 15, 20),
  createData('Spanish Homework', 10, 13),
  createData('Science Test', 20, 2),
];

class TeacherAssignments extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='teacher_assignments'>
        <div className='assignments_list'>
          <Card>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{fontWeight: 'bold'}}> Assignment Name </TableCell>
                  <TableCell style={{fontWeight: 'bold'}}> Points </TableCell>
                  <TableCell style={{fontWeight: 'bold'}}> Submitted </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow id={row.name} key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.points}
                      </TableCell>
                      <TableCell align="right">
                        {row.submitted}
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          </Card>
        </div>

        <div className='new_assignments'>
          <TextField
            id="new-assignment-name"
            label="Assignment Name"
            variant="filled"
          />
          <TextField
            id="assignment_points"
            label="Number"
            type="number"
            variant="filled"
          />
        </div>
        <div className='add_assignments'>
          <IconButton>
            <Add className='add__icon' fontSize='large'/>
          </IconButton>
        </div>
      </div>
    );
  }
}

export default TeacherAssignments;
