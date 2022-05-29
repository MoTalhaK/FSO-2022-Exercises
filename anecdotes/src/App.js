import React, { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}

const Header = ({ text }) => <h1>{text}</h1>


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0);


  const votesArray = new Array(anecdotes.length).fill(0);
  const [vote, setVote] = useState(votesArray);

  const handleNextAnecdote = () => {
    var len = anecdotes.length;
    var randomNum = Math.floor(Math.random() * Math.floor(len));
    setSelected(randomNum);
  }

  const handleVote = () => {
    // setVote(copy[selected] = vote + 1);
    // console.log(copy[selected]);
    const votesCopy = [...vote];
    votesCopy[selected] += 1;
    setVote(votesCopy);
    console.log(votesCopy);
  };

  const getMaxVote = () => {
    var maxVote = Math.max(...vote);
    return maxVote;
  }

  const getAnecdoteWithMaxVotes = () => {
    var maxVote = Math.max(...vote);
    var index = vote.indexOf(maxVote);
    return anecdotes[index];
  }

  return (
    <div>
      <Header text="Anecdote of the day"></Header>
      {anecdotes[selected]}
      <p>has {vote[selected]} votes</p>
      <div>
        <Button onClick={handleVote} text="vote"></Button>
        <Button onClick={handleNextAnecdote} text="next anecdote"></Button>
      </div>
      <Header text="Anecdote with most votes"></Header>
      {getAnecdoteWithMaxVotes()}
      <p>has {getMaxVote()} votes</p>
    </div>
  )
}

export default App