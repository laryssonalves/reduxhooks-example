import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function addCourseAction(title) {
  return { type: 'ADD_COURSE', title }
}

export default function CourseAdd() {
  const [ title, setTitle ] = useState('')
  const dispatch = useDispatch()

  function addCourse() {
    dispatch(addCourseAction(title))
  }

  function handleInputChange(event) {
    const { value } = event.target

    setTitle(value)
  }

  return (
    <>
      <input id="title" type="text" onChange={handleInputChange} name="title" />
      <button type="button" onClick={addCourse} disabled={ !title.length }>Adicionar Curso</button>
    </>
  )
}