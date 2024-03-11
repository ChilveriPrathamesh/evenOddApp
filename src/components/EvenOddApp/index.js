import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomumber}))
  }

  render() {
    const {count} = this.state
    const displaytext = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="title"> Count {count}</h1>
          <p className="description"> Count is {displaytext}</p>

          <button type="button" className="btn" onClick={this.onIncrement}>
            {' '}
            Increment
          </button>
          <p className="para">* Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
