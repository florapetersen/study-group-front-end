import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'
import CourseFormContainer from './containers/CourseFormContainer'
import CoursesIndexContainer from './containers/CoursesIndexContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            Courses
          </Route>
          <Route path="courses/new">New Course</Route>
        </Switch>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
