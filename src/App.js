import './App.css'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavComponent from './components/NacComponent'
import { Container } from 'react-bootstrap'
import HomeCompnent from './components/HomeComponent'

function App() {
  const [cityWeather, setCityWeather] = useState(null)

  return (
    <>
      <header>
        <NavComponent setCityWeather={setCityWeather} />
      </header>
      <main>
        <Container className="position-relative">
          <HomeCompnent cityWeather={cityWeather} />
        </Container>
      </main>
    </>
  )
}

export default App
