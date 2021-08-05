import React, { Component } from 'react'

export default class NewNoteContainer extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const body = new FormData()
        body.append('note[title]', form.title.value)
        body.append('note[content]', form.content.value)
        body.append('note[course_id]', this.props.match.params.courseId)

        fetch('http://localhost:3000/notes', {
            method: 'post',
            body,
        })
        .then((res) => res.json())
        .then((noteJson) => {
            console.log(noteJson)
        })
    }

  render() {
    return (
        <form
            className="max-w-4xl w-11/12 mx-auto mt-16 shadow-lg px-8 py-6"
        >
            <h1 className="text-3xl text-center font-semibold mb-8">Share Notes</h1>
            <fieldset className="">
                <label htmlFor="title" className="block uppercase">
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="w-full border-2 p-4 my-4"
                />
            </fieldset>
            <fieldset className="">
          <label htmlFor="content" className="block uppercase">
            Content
          </label>
          <textarea
            className="w-full border-2 p-4 my-4"
            name="content"
            id="content"
          ></textarea>
        </fieldset>
        <button
          type="submit"
          className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200"
        >
          Submit
        </button>
        </form>
    )
}
}