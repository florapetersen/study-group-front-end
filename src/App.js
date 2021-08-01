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
        <nav className="text-center bg-blue-900 text-yellow-100 p-4">
          <NavLink
            className="inline-block px-4 py-2"
            activeClassName="text-yellow-300"
            exact
            to="/"
            >
              Courses
            </NavLink>
            <NavLink
            className="inline-block px-4 py-2"
            activeClassName="text-yellow-300"
            exact
            to="/courses/new"
          >
            New Course
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            <CoursesIndexContainer />
          </Route>
          <Route path="courses/new">
            <CourseFormContainer />
          </Route>
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
