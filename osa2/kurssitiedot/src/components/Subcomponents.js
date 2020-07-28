import React from 'react'

export const Course = ({course}) => {
    return (
      <>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
      </>
    )
  }
  
export const Header = (props) => {
    return (
      <div>
        <h1>{props.course.name}</h1>
      </div>
    )
  }
  
export const Content = (props) => {
    return (
      <div>
        {props.course.parts.map((part) => <Part key={part.id} part={part}/>)}
      </div>
    )
  }

export const Total = (props) => {
    return (
      <div>
        <h2>Total of {props.course.parts.reduce((r,part) => r + part.exercises,0)} exercises</h2>
      </div>
    )
  }
  
export const Part = (props) => {
    return (
      <div>
        <p>
          {props.part.name} {props.part.exercises}
        </p>
      </div>
    )
  }

