import React, { Component } from 'react'

export default class CourseFormContainer extends Component {
  state = {
    groups: [],
    loading: true,
  }

  render() {
    return (
      <section className="max-w-6xl mx-auto mt-16">
        {this.state.loading
          ? 'loading spinner'
          : '<CoursesList courses={this.state.courses} />'}
      </section>
    )
  }
}