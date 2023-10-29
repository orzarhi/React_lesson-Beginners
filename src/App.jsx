import { Route, Routes } from 'react-router-dom'
import { Home, About, Header, Tasks, Todo } from './components'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
        <Route path="/:todoId" element={<Todo />} />
      </Routes>
    </>
  )
}

export default App
