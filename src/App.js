import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'
import CourseFormContainer from './containers/CourseFormContainer'
import CoursesIndexContainer from './containers/CoursesIndexContainer'
import NewNoteContainer from './containers/NewNoteContainer'

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
              Home
          </NavLink>
          <NavLink
            className="inline-block px-4 py-2"
            activeClassName="text-yellow-300"
            exact
            to="/courses"
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
          <Route exact path="/course">
            <CoursesIndexContainer />
          </Route>
          <Route path="/courses/new" component={CourseFormContainer} />
          <Route path-="/courses/:courseId/notes/new" component={NewNoteContainer} />
        </Switch>
      </Router>
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
