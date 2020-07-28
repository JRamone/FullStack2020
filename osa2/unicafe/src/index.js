import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);
 
  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);
  
  if (good+bad+neutral === 0 ){
    return(
      <div>
        <h1>Give Feedback</h1>
        <Button text="Good" onClick={increaseGood}/>
        <Button text="Neutral" onClick={increaseNeutral}/>
        <Button text="Bad" onClick={increaseBad}/>
        <br/>
        <br/>
        no feedback given yet
      </div>
    )
  }
  return(
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" onClick={increaseGood}/>
      <Button text="Neutral" onClick={increaseNeutral}/>
      <Button text="Bad" onClick={increaseBad}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
  }




//Apukomponentit:
const StatisticLine = ({text,stat,suffix}) => {
  return (
    <tr>
      <td>
      {text}
      </td>
      <td>
      {stat} {suffix}
      </td>
    </tr>
  )
}
const Statistics = ({good,neutral,bad}) => {
  return (
    <>
    <h1>Statistics:</h1>
    <table>
      <tbody>
      <StatisticLine text="good" stat={good}/>
      <StatisticLine text="neutral" stat={neutral}/>
      <StatisticLine text="bad" stat={bad}/>
      <StatisticLine text="total" stat={good+neutral+bad}/>
      <StatisticLine text="avg" stat={(good-bad)/(good+neutral+bad)}/>
      <StatisticLine text="positive" stat={(good/(good+neutral+bad)) * 100} suffix="%"/>
      </tbody>
    </table>
    </>
  )
}


const Button = ({text, onClick}) => {
  return(
    <button onClick = {onClick}>{text}</button>
  )
}


ReactDOM.render(<App />,
  document.getElementById('root')
);
