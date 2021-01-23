import './App.css';
import Header from './Header';
import ProfilePicture from './ProfilePicture';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import Store from './Store';
import TeacherStore from './TeacherStore';
import TeacherLeaderboard from './TeacherLeaderboard';
import TeacherAssignments from './TeacherAssignments';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/store'>
            <Store />
          </Route>
          <Route path='/leaderboard'>
            <Leaderboard />
          </Route>
          <Route path='/teacherstore'>
            <TeacherStore />
          </Route>
          <Route path='/teacherleaderboard'>
            <TeacherLeaderboard />
          </Route>
          <Route path='/teacherassignments'>
            <TeacherAssignments />
          </Route>
          <Route path='/'>
            <ProfilePicture />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
