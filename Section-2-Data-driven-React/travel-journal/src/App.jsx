import './App.css'
import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import data from './data.js'

function App() {
  const destinationList = data.map(destinationInfo => {
    return (<Entry
              key={destinationInfo.id}
              {...destinationInfo}
           />)
  })
  return (
    <>
      <Header />
      <main id='container'>
        {destinationList}
      </main>
    </>
  )
}

export default App
