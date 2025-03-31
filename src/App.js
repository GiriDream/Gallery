import { Component } from 'react'
import Capitals from './components/Capitals'
import './App.css'

const countryAndCapitalsList = [
  { id: 'NEW_DELHI', capitalDisplayText: 'New Delhi', country: 'India' },
  { id: 'LONDON', capitalDisplayText: 'London', country: 'United Kingdom' },
  { id: 'PARIS', capitalDisplayText: 'Paris', country: 'France' },
  { id: 'KATHMANDU', capitalDisplayText: 'Kathmandu', country: 'Nepal' },
  { id: 'HELSINKI', capitalDisplayText: 'Helsinki', country: 'Finland' },
]

class App extends Component {
  state = { selectedCapital: countryAndCapitalsList[0].id }

  handleSelectChange = (event) => {
    this.setState({ selectedCapital: event.target.value })
  }

  render() {
    const { selectedCapital } = this.state
    const selectedCapitalObj = countryAndCapitalsList.find(
      (item) => item.id === selectedCapital
    )

    return (
      <div className="app-container">
        <h1 className="heading">Country & Capital Finder</h1>

        <label htmlFor="capitals">Choose a Capital:</label>
        <select id="capitals" onChange={this.handleSelectChange} className="dropdown">
          {countryAndCapitalsList.map((eachCountry) => (
            <option key={eachCountry.id} value={eachCountry.id}>
              {eachCountry.capitalDisplayText}
            </option>
          ))}
        </select>

        {/* Passing props to Capitals Component */}
        <Capitals capital={selectedCapitalObj.capitalDisplayText} country={selectedCapitalObj.country} />
      </div>
    )
  }
}

export default App
