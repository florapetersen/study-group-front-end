import React, { Component } from 'react'
import CoursesList from '../components/CoursesList'

export default class CoursesIndexContainer extends Component {
  state = {
    courses: [],
    loading: true,
  }

  componentDidMount() {
      setTimeout(() => {
          this.setState({
              courses: [
                  { name: 'Biology' },
                  { name: 'Chemistry' },
              ],
              loading: false,
          })
      }, 1000)
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