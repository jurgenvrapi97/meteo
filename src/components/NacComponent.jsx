import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import logo from '../logo-meteo.png'

const NavComponet = ({ setCityWeather }) => {
  async function fetchWeather(cityName) {
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
    const APP_ID = '5b0f96f4cd37b0e9c3762275775e4c36'
    try {
      const response = await fetch(
        `${API_URL}?q=${cityName}&units=metric&appid=${APP_ID}`
      )
      if (response.ok) {
        const data = await response.json()
        setCityWeather(data)
      } else {
        console.error('Errore nella richiesta API:', response.status)
      }
    } catch (error) {
      console.error('Errore nella richiesta API:', error)
    }
  }

  function handleInput(event) {
    const cityName = event.target.value
    fetchWeather(cityName)
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            id="logo"
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top rounded-circle"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <input
              className="text-center rounded-pill p-2"
              type="text"
              onChange={handleInput}
              placeholder="Cerca la città"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavComponet
