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
    //console.log(props)
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
  const courseName = 'Half Stack application development'
  const part1 = {name: 'Fundamentals of React', exercises: 10} ;
  const part2 = {name: 'Using props to pass data', exercises: 7};
  const part3 = {name: 'State of a component', exercises: 14};
  const courses = [part1, part2, part3]
  const total = part1.exercises+part2.exercises+part3.exercises;
  
  return (
    <div>
        <Header name = {courseName}/>
        <Content courses= {courses}  />
        <Total total={total}/>

    </div>
  )
}

export default CourseInfo