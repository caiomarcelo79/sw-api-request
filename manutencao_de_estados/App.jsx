import React, { useState } from 'react'
import Home from './src/Views/Home'
import Login from './src/Views/Login'

export default function App() {
  const [logged, setLogged] = useState(false)

  return logged ? (
    <Home setLogged={setLogged} />
  ) : (
    <Login setLogged={setLogged} />
  )
}
