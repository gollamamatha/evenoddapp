// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, value: 'Even'}

  onclickIncrement = () => {
    const {count} = this.state

    const countNumber = Math.ceil(Math.random() * 100)

    const numberType = count % 2 === 0 ? 'Even' : 'Odd'

    this.setState(prevState => ({
      count: prevState.count + countNumber,
      value: numberType,
    }))
  }

  render() {
    const {count, value} = this.state
    return (
      <div className="bg_container">
        <h1 className="heading">Count {count}</h1>
        <p className="para">Count is {value}</p>
        <button
          className="button"
          type="button"
          onClick={this.onclickIncrement}
        >
          Increment
        </button>
        <p className="increment_para">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
