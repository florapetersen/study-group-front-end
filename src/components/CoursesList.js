import React from 'react'
import CourseListItem from './CourseListItem'

const CoursesList = ({ courses }) => {
  return (
    <>
      <h1>CoursesList</h1>
      <ul>
        {courses.map((course) => (
          <CourseListItem key={course.id} course={course} />
        ))}
      </ul>
    </>
  )
}

export default CoursesList