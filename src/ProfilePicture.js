import * as React from 'react';
import './ProfilePicture.css';
import DescriptionIcon from '@material-ui/icons/Description';
import {Card, CardContent, Table, TableHead, TableRow, TableBody, TableCell} from '@material-ui/core';


function createData(name, points) {
  return { name, points };
}

const rows = [
  createData('English Essay', 40),
  createData('Page 62 #4-19', 15),
  createData('Cell Cycle Drawing', 30),
  createData('Coloring Worksheet', 500),
  createData('Multiplication Tables', 20),
];

class ProfilePicture extends React.Component {

  constructor(props) {
    super(props);
    let point = 0;
    let assignment = rows;
    if(localStorage.getItem("totalPoints") != null) {
      point = Number(localStorage.getItem("totalPoints"));
    }
    if(localStorage.getItem("assignments") != null) {
      assignment = localStorage.getItem("assignments");
    }
    this.state = {
      totalPoints: point,
      assignments: assignment
    };
  }

  hideAssignment(name, points) {
      let assignmentRow = document.getElementById(name);
      console.log(this.state.totalPoints);
      console.log(this.state.assignments);
      let index = 0
      for(let i = 0; i < rows.length; i++) {
        if(rows[i].name === name) {
          index = i;
        }
      }
      console.log(index);
      if (index !== -1) {
        rows.splice(index, 1);
      }
      console.log(rows);
      this.setState({
        totalPoints: this.state.totalPoints + points,
        assignments: rows
      });
      console.log(this.state.assignments);
      localStorage.setItem("totalPoints", this.state.totalPoints + points);
      assignmentRow.style.visibility = 'hidden';
  }

  render() {
    let points = this.state.totalPoints;
    // let homework = this.state.assignments;
    return(
      <div className='profilePicture'>
        <div className='imageCropper'>
            <img
              className='profilePicture_image'
              src='https://www.pngkey.com/png/full/6-61101_image-result-for-kid-monsters-yellow-monster-clipart.png'
              alt='profile'
            />
        </div>
        <div className='profilePicture_userDetails'>
            <h1>Supriyo Rana</h1>
            <h1>Points: {points}</h1>
        </div>
        <div className='profilePicture_assignments'>
          <Card>
            <CardContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{fontWeight: 'bold'}}> Assignment Name </TableCell>
                    <TableCell style={{fontWeight: 'bold'}}> Points </TableCell>
                    <TableCell style={{fontWeight: 'bold'}}> Completed </TableCell>
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
                          <input type="checkbox" onChange={this.hideAssignment.bind(this, row.name, row.points)}/>
                        </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

//function ProfilePicture() {

    // <h1 className='profilePicture_name'>
    //   Tom Brady
    // </h1>
    // <img
    //   className='profileRank'
    //   src='https://steamuserimages-a.akamaihd.net/ugc/771721592097475250/06D2F6D1482630BB6233794538C53B9706C7C5A6/'
    //   alt='rank'
    // />
    // <p1 className='points'>
    //   Rank 112 (Top 75%)
    //
    // </p1>
    // <br />
    // <p2 className='completedTasks'>
    //   42069 Points / 118 of 210 Tasks
    //
    // </p2>


//   )
// }

export default ProfilePicture;
