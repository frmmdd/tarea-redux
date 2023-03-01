import React from 'react'
import PropTypes from 'prop-types';


export const Todo = ({ onClick, completed, text, id }) => {
  return (
    <li 
        onClick={onClick} 
        style={{
            textDecoration: completed ? 'line-through' : 'none',
            textDecorationColor: completed ? 'green' : 'none',
            color: completed ? 'green' : 'black',
        }}
    >
        {id} - {text}
    </li>
  )
}

Todo.protoTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}
