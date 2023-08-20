import React from 'react'
import "../styles/style.css"
import Header from './Header'
import Travel from './Travel'
import elements from "../assets/data"

function App() {
  const travelElements = elements.map(element => 
            <Travel 
              key = {element.id}
              {...element}
            />
    )
  return (
    <div className="App">
      <Header />
      {travelElements}
    </div>
  )
}

export default App
