import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randNum: 0,
  }

  onRandom = () => {
    this.setState({
      randNum: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {randNum} = this.state
    return (
      <div className="bg_container">
        <div className="card">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.onRandom}>
            Generate
          </button>
          <p className="output_display">{randNum}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
