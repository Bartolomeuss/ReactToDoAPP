import React from "react"

function TodoItem(props) {
    console.log(this.props)
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.item}</p>
        </div>
    )
}

export default TodoItem