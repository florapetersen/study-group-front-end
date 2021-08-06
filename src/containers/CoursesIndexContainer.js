import React, { Component } from 'react'
import CoursesList from '../components/CoursesList'

export default class CoursesIndexContainer extends Component {
  state = {
    courses: [],
    loading: true,
  }

  componentDidMount() {
      fetch('http://localhost:3001/courses', {
          method: 'get',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      })
        .then(res => res.json())
        .then(coursesJson => {
            console.log('courses', coursesJson)
            this.setState({
                courses: coursesJson,
                loading: false
            })
        })
  }

  render() {
    return (
      <section className="max-w-6xl mx-auto mt-16">
        {this.state.loading
          ? ('loading spinner')
          : (<CoursesList courses={this.state.courses} />)}
      </section>
    )
  }
}