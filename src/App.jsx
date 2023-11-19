import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { About, Header, Home, Tasks, Todo, Footer } from './components'

function App() {
  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
        <Route path="/:todoId" element={<Todo />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
//https://us02web.zoom.us/s/85755981804#success
//https://us02web.zoom.us/j/85755981804?pwd=MTdUZzdOR0VSK1ZPSUt6VE5ZZ3g4QT09