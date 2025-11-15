const Header = (props) => {
    console.log('Estas viendo el titulo');
    console.log(props);
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )

}

const Part = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.props.name} {props.props.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    console.log(props)
    console.log('Contenido del curso')
    return (
        <div>
            <Part props={props.courses[0]} />
            <Part props={props.courses[1]}/>
            <Part props={props.courses[2]}/>
        </div>
    )

}

const Total = (props) => {
    console.log('Numero total de ejercicios: ',props.total)
    return (
        <div>
            <p>Number of exercises: {props.total}</p>
        </div>
    )
}

const CourseInfo = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {name: 'Fundamentals of React', exercises: 10} ,
            {name: 'Using props to pass data', exercises: 7},
            {name: 'State of a component', exercises: 14}
        ]
    }
    console.log(course)
    const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  
    return (
        <div>
            <Header name = {course.name}/>
            <Content courses= {course.parts}/>
            <Total total={total}/>

        </div>
  )
}

export default CourseInfo