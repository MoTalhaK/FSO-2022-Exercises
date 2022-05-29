import React, { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}

const Clicks = (props) => {
  return <p>{props.text} {props.count}</p>
}

const Title = (props) => {
  return <h1>{props.text}</h1>
}

const Statistics = (props) => {
  let { good, bad, neutral, all, badAvg } = props;

  const showAverage = () => {
    return (good + badAvg) / all;
  }

  const showPositive = () => {
    return (good / all) * 100 + " %";
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" count={good}></StatisticLine>
          <StatisticLine text="neutral" count={neutral}></StatisticLine>
          <StatisticLine text="bad" count={bad}></StatisticLine>
          <StatisticLine text="all" count={all}></StatisticLine>
          <StatisticLine text="average" count={showAverage()}></StatisticLine>
          <StatisticLine text="positive" count={showPositive()}></StatisticLine>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  return <tr>
    <td>{props.text}</td><td>{props.count}</td>
  </tr>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [badAvg, setBadAvg] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(all + 1);
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setAll(all + 1);
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setAll(all + 1);
    setBad(bad + 1);
    setBadAvg(bad - 1);
  }

  const renderStatistics = () => {
    if (all === 0) {
      return <div>No feedback given</div>
    } else {
      return (
        <div>
          <Statistics good={good} neutral={neutral} bad={bad} all={all} badAvg={badAvg} ></Statistics>
        </div>
      )
    }
  }

  return (
    <div>
      <Title text="give feedback" />
      <Button onClick={handleGoodClick} text="good"></Button>
      <Button onClick={handleNeutralClick} text="neutral"></Button>
      <Button onClick={handleBadClick} text="bad"></Button>
      <Title text="statistics"></Title>
      {renderStatistics()}
    </div>
  )
}

export default App