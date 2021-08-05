import React, { Component } from 'react'

export default class CourseFormContainer extends Component {
  state = {
    name: '',
    subject: '',
    instructor: '',
    year: '',
    school: ''
  }

  render() {
    return (
      <form className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6">
        <h1 className="text-center text-3xl font-semibold mb-2">New Course</h1>
        <fieldset>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Course name"
            className="w-full border p-4 my-4"
          />
          <input
            type="text"
            name="subject"
            value={this.state.subject}
            placeholder="Course subject"
            className="w-full border p-4 my-4"
          />
          <input
            type="text"
            name="instructor"
            value={this.state.instructor}
            placeholder="Course instructor"
            className="w-full border p-4 my-4"
          />
          <input
            type="text"
            name="year"
            value={this.state.year}
            placeholder="Year"
            className="w-full border p-4 my-4"
          />
          <input
            type="text"
            name="school"
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