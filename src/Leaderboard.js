import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './Leaderboard.css';

function Leaderboard(){
  return(
    <div className="leaderboard">
    <h1> Leaderboard </h1>
      <div className="list">
        <List>
        <ListItemText primary="#1 Johnny 475 Points" />
         <ListItemText primary="#2 Karen 324 Points" />
         <ListItemText primary="#3 Jack 245 Points" />
         <ListItemText primary="#4 Eric 233 Points" />
         <ListItemText primary="#5 Lance 124 Points" />

       </List>
      </div>
    </div>
  )
}

export default Leaderboard;
