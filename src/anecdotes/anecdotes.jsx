import { useState } from 'react'

const generateRandomNumber = () => Math.trunc(Math.random() * 7 )

const Anecdotes = () => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState([
        0,0,0,0,0,0,0,0
    ])

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const handleNextClick = () => {
        const random = generateRandomNumber()
        console.log('random', random)
        const updateSelected = random
        setSelected(updateSelected)
        
    }
    const handleVote = (props) => {
        console.log(props)
        const copy = [...votes]
        copy[props] += 1
        setVotes(copy)
    }

    const Button = ({handleClick, text}) => (
        <button onClick={handleClick}>{text}</button>
    )
    

    return (
        <div>
            <h1>Anecdotes</h1>
            <div>{anecdotes[selected]}</div>
            <div>Has {votes[selected]} votes</div>
            <Button handleClick={()=>handleVote(selected)} text='Vote'/>
            <Button handleClick={handleNextClick} text='Next anecdote'/>
        </div>
    )
}

export default Anecdotes