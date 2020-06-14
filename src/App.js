
import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      answerArray: ["When the dark one returns, a forbidden relationship shall cause an age of growth.",
      "Once the world turns to winter, a forced marriage shall bring the fall of a false god and a new unity.",
       "Once the day is shortest, a suspicious malfunction shall cause an aeon of brutality.", 
       "When rivers run dry, the young one shall mark an age of abundance.", "When the time comes that temptation is too strong, a fall shall usher forth the deaths of a million.",
        "When the time comes that the sky turns red, a secret woman shall bring an age of anarchy."],
      answer: null,
      question: "",
      isShaking: false
    }
  }

  getAnswer = () => {
    const { answerArray } = this.state
    let randomNumber = Math.floor(Math.random() * answerArray.length)
    return answerArray[randomNumber]
  }

  handleChange = (e) => {
    this.setState({ question: e.target.value })
  }

  handleSubmit = () => {
    // destructures question out of state
    const { question } = this.state
    if(question.length > 0 && question.includes("?")){
      const answer = this.getAnswer()
      this.setState()
      setTimeout(() => {
        this.setState({ answer: answer })
      }, 1500)
    }
  }

  restartClick = () => {
    this.setState({
      answer: null,
      question: "",
    
    })
  }

  render(){
    return (
      <div >
        <div className="container">
        <h1>What does your future hold?</h1>
        <h2>ask your question below</h2>
        
        <input
          id="inputBox"
          type='text'
          value={ this.state.question }
          onChange={ this.handleChange }
        />
        <button onClick={ this.restartClick }>
        Clear
        </button>
        <br />
        <button
          id="submitButton"
          onClick={ this.handleSubmit }
          >
          Look into the Crystal Ball
        </button>
        <div id="eightBall">
          { this.state.answer &&
            <p id="answer"> { this.state.answer } </p>
          }
        </div>
        </div>
      </div>
    )
  }
}

export default App
