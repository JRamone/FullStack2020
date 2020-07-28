import React, {useState} from 'react';
import ReactDOM from 'react-dom';



const App = (props) => {

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(initial_state);
  const [mostvotes,setMostvotes] = useState(0);
  
  const randomize = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }
  const vote = () => {
    const a = votes.slice();
    a[selected]++;
    setVotes(a);
    if (a[selected] > votes[mostvotes]){
      setMostvotes(selected);
    }
  }

  return (
    <div>
      {props.anecdotes[selected]}<br/>
      <Button text="Vote" onClick = {vote}/>
      <Button text="Give new anecdote" onClick = {randomize}/>
      <p>this anecdote has {votes[selected]} votes </p>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[mostvotes]}<br/>
      <p>has {votes[mostvotes]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const initial_state = new Uint8Array(anecdotes.length);

const Button = ({text, onClick}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

ReactDOM.render(
    <App anecdotes = {anecdotes}/>,
  document.getElementById('root')
);
