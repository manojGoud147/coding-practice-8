// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  onChangeCount = event => {
    const word = event.target.value
    this.setState({count: word.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="main">
        <div>
          <h1>Calculate the Letters you enter</h1>
          <div>
            <lable htmlFor="letter">Enter the phrase</lable>
            <br/>
            <input
              type="text"
              placeholder="Enter the phrase"
              id="letter"
              onChange={this.onChangeCount}
            />
          </div>
          <p>No.of letters: {count}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
