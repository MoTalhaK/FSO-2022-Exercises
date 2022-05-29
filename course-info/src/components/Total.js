const Total = (props) => {
    return (
        <div>
            <p><b>total of {props.course.parts.reduce((s, p) => { return s + p.exercises }, 0)} exercises</b></p>
        </div>
    )
}

export { Total }