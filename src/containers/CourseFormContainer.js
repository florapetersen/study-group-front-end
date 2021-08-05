import React, { Component } from 'react'

export default class CourseFormContainer extends Component {
  state = {
    name: '',
    subject: '',
    instructor: '',
    year: '',
    school: ''
  }

  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value,
      })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      fetch('http://localhost:3000/courses', {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ course: this.state }),
      })
      .then((res) => res.json())
      .then((courseJson) => {
        this.props.history.push('/courses')
      })
  }

  render() {
    return (
      <form 
        onSubmit={this.handleSubmit}
        className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6">
        <h1 className="text-center text-3xl font-semibold mb-2">New Course</h1>
        <fieldset>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Course name"
            className="w-full border p-4 my-4"
          />
          <input
            type="text"
            name="subject"
            onChange={this.handleChange}
            value={this.state.subject}
            placeholder="Course subject"
            className="w-full border p-4 my-4"
          />
          <input
            type="text"
            name="instructor"
            onChange={this.handleChange}
            value={this.state.instructor}
            placeholder="Course instructor"
            className="w-full border p-4 my-4"
          />
          <input
            type="text"
            name="year"
            onChange={this.handleChange}
            value={this.state.year}
            placeholder="Year"
            className="w-full border p-4 my-4"
          />
          <input
            type="text"
            name="school"
            onChange={this.handleChange}
            value={this.state.school}
            placeholder="School"
            className="w-full border p-4 my-4"
          />
        </fieldset>
        <button
          className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200"
          type="submit"
        >
          Add Course
        </button>
      </form>
    )
  }
}