import { Content } from './Content'
import { Header } from './Header'
import { Total } from './Total'

const Course = (props) => {
    console.log(props.course);
    return (
        <div>
            <Header course={props.course}></Header>
            <Content course={props.course}></Content>
            <Total course={props.course}></Total>
        </div>
    )
}

export { Course }