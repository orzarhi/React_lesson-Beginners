import { Route, Routes } from 'react-router-dom'
import { Home, About, Header, Tasks } from './components'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
