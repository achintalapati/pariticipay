import * as React from 'react';
import { useState, useEffect} from 'react';
import {Card, CardContent, Table, TableHead, TableRow, TableBody, TableCell, TextField} from '@material-ui/core';
import './TeacherAssignments.css';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import axios from './axios';


function TeacherAssignments() {

  const [assignments, setAssignments] = useState([]);
  const [assignmentInput, setAssignmentInput] = useState([]);
  const [pointInput, setPointInput] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/assignments');

      setAssignments(req.data);
    }

    fetchData();
  }, []);

  const sendData = async () => {
    let res = await axios.post('/assignments', {"name": assignmentInput, "points": pointInput});
    console.log(res);
  }

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
                {assignments.map((row) => (
                  <TableRow id={row.name} key={assignments.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.points}
                      </TableCell>
                      <TableCell align="right">
                        0
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
            value={assignmentInput}
           onChange={e => setAssignmentInput(e.target.value)}
          />
          <TextField
            id="assignment_points"
            label="Points"
            type="number"
            variant="filled"
            value={pointInput}
           onChange={e => setPointInput(e.target.value)}
          />
        </div>
        <div className='add_assignments' onClick={()=>sendData()}>
          <IconButton>
            <Add className='add__icon' fontSize='large'/>
          </IconButton>
        </div>
      </div>
    )
}

export default TeacherAssignments;
