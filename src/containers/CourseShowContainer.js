import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CourseShowContainer extends Component {
    state = {
        course: {},
        loading: true,
    }

    componentDidMount() {
        const courseId = this.props.match.params.courseId
        fetch(`http://localhost:3001/courses/${courseId}`)
        .then(res => res.json())
        .then(({ course }) => {
            this.setState({
                course,
                loading: false
            })
        })
    }
  
    render() {
        if (this.state.loading) {
            return <div>Loading Spinner</div>
        }
        return <section className="max-w-6xl w-11/12 mx-auto mt-16">
            <h1 className="text-3xl font-bold text-center">
                {this.state.course.name}
            </h1>
            <p className="my-2">
                <Link to={`/courses/${this.state.course.id}/notes/new`}>Share Notes</Link>
            </p>
        </section>
    }
}