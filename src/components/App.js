import React, { Component } from 'react';
import NavbarMain from './Navigation/NavbarMain/NavbarMain';
import WorkoutNav from './Navigation/WorkoutNav/WorkoutNav';
import MyWorkouts from './MyWorkouts/MyWorkouts';
import Wrap from './hoc/Wrap';

class App extends Component {
  render() {
    return (
      <Wrap>
        <NavbarMain/>
        <WorkoutNav />
        <MyWorkouts />
      </Wrap>
    );
  }
}

export default App;
