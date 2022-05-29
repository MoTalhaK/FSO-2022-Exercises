import { Part } from './Part'

const Content = (props) => {
    return (
        <div>
            {props.course.parts.map(parts =>
                <Part key={parts.id} part={parts.name} number={parts.exercises} />
            )}
        </div>
    )
};

export { Content }