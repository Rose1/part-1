import { useState } from 'react'

const Statistics = (props) => {

      return (
        <div>{props.text} {props.total}</div>
      )
}

const Unicafe = () => {

    // guarda los clics de cada boton en su propio estado
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)
    const [punctuation, setPunctuation] = useState(0)
    const [average, setAverage] = useState(0)
    const [percentage, setPercentage] = useState(0)

    const handleGoodClick = () => {
      const updatedGood = good + 1
      setGood(updatedGood)
      const updatedTotal = updatedGood + neutral+bad
      setTotal(updatedTotal)
      setPercentage((updatedGood/updatedTotal)*100)
      const updatedPunctuation = punctuation + 1
      setPunctuation(updatedPunctuation)
      setAverage(updatedPunctuation/updatedTotal)
    }
    const handleBadClick = () => {
      const updatedBad = bad + 1
      const updatedPunctuation = punctuation - 1
      setBad(updatedBad)
      const updatedTotal = updatedBad + good + neutral
      setTotal(updatedTotal)
      setPercentage((good/updatedTotal)*100)
      setPunctuation(updatedPunctuation)
      setAverage(updatedPunctuation/updatedTotal)
    }

    const handleNeutralClick = () => {
      const updatedNeutral = neutral + 1
      setNeutral(updatedNeutral)
      const updatedTotal = updatedNeutral + good + bad
      setTotal(updatedTotal)
      setPercentage((good/total)*100)
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
            <Statistics text='All' total={total}/>
            <Statistics text='Average' total={average}/>
            <Statistics text='Positive' total={percentage}/>
        </div>
    )
}

export default Unicafe
