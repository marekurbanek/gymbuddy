import React, { Component } from 'react';
import './App.css';
import NavbarMain from './Navigation/NavbarMain/NavbarMain';
import WorkoutNav from './Navigation/WorkoutNav/WorkoutNav';
import MyWorkouts from './MyWorkouts/MyWorkouts';

class App extends Component {
  render() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <NavbarMain/>
        <WorkoutNav />
        <MyWorkouts />
      </div>
    );
  }
}

export default App;
