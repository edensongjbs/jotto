import React from 'react'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1><strong>Jotto</strong></h1>
        <Congrats success={true}/>
        <GuessedWords guessedWords={[{guessedWord:'train', letterMatchCount:3}]}/>
      </div>
    )
  }
}

export default App;
