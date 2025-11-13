import { useState } from 'react'

const Unicafe = () => {

    // guarda los clics de cada boton en su propio estado
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
      const updatedGood = good + 1
      setGood(updatedGood)
    }
    const handleBadClick = () => {
      const updatedBad = bad + 1
      setBad(updatedBad)
    }

    const handleNeutralClick = () => {
      const updatedNeutral = neutral + 1
      setNeutral(updatedNeutral)
    }

    const Statistics = (props) => {

      return (
        <div>{props.text} {props.total}</div>
      )
    }

    const Button = ({ handleClick, text }) => (
      <button onClick={handleClick}>
        {text}
      </button>
    )

    return (
        <div>
            <h2>Give feedback</h2>
            <Button handleClick={handleGoodClick} text='Good'/>
            <Button handleClick={handleNeutralClick} text='Neutral'/>
            <Button handleClick={handleBadClick} text='Bad'/>
            <h2>Statistics</h2>
            <Statistics text='Good' total={good}/>
            <Statistics text='Neutral' total={neutral}/>
            <Statistics text='bad' total={bad}/>
        </div>
    )
}

export default Unicafe
