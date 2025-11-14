import { useState } from 'react'

const StatisticLine = (props) => {
    return <div>{props.text} {props.total} {props.sign}</div>
}

const Statistics = (props) => {
    return (
        <div>
            <StatisticLine text={props.stats.textGood} total={props.stats.totalGood}/>
            <StatisticLine text={props.stats.textNeutral} total={props.stats.totalNeutral}/>
            <StatisticLine text={props.stats.textBad} total={props.stats.totalBad}/>
            <StatisticLine text={props.stats.textAll} total={props.stats.total}/>
            <StatisticLine text={props.stats.textAverage} total={props.stats.totalAverage}/>
            <StatisticLine text={props.stats.textPositive} total={props.stats.totalPercentage} sign={props.stats.sign}/>
        </div>
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

    const data = {
        textGood: 'Good',
        textBad: 'Bad',
        textNeutral: 'Neutral',
        textAll: 'All',
        textAverage: 'Average',
        textPositive: 'Positive',
        totalGood: good,
        totalNeutral: neutral,
        totalBad: bad,
        total: total,
        totalAverage: average,
        totalPercentage: percentage,
        sign: '%'
    }

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
      setPercentage((good/updatedTotal)*100)
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
            {total === 0 ? (
                <p>No feedback given</p>
            ) : (
                <>
                    <Statistics stats={data}/>
                </>
            )}
        </div>
    )
}

export default Unicafe
