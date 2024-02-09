import { Col, Row } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import TemperatureComponent from './TemperatureComponent'
import Spinner from 'react-bootstrap/Spinner'
import GeneralInfoComponent from './GeneralnfoComponent'
import MoreComponent from './MoreComponent'
import NextDayComponent from './NextDayComponent'
const HomeCompnent = ({ cityWeather }) => {
  const [weatherData, setWeatherData] = useState(cityWeather)

  useEffect(() => {
    if (cityWeather) {
      setWeatherData(cityWeather)
      console.log(weatherData.coord.lat)
    } else {
      async function fetchWeather(latitude, longitude) {
        const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
        const APP_ID = '5b0f96f4cd37b0e9c3762275775e4c36'

        try {
          const response = await fetch(
            `${API_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${APP_ID}`
          )
          if (response.ok) {
            const data = await response.json()
            setWeatherData(data)
            console.log(data)
          } else {
            console.error('Errore nella richiesta API:', response.status)
          }
        } catch (error) {
          console.error('Errore nella richiesta API:', error)
        }
      }

      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const latitude = position.coords.latitude
              const longitude = position.coords.longitude
              fetchWeather(latitude, longitude)
            },
            (error) => {
              console.error('Errore nella geolocalizzazione:', error.message)
              fetchWeather(63.46083, 142.78583)
            }
          )
        } else {
          console.error(
            'La geolocalizzazione non è supportata da questo browser.'
          )
          fetchWeather(63.46083, 142.78583)
          // nel caso di rifiuto della posizione ho inserito coordinate du default, città più fredda al mondo :)
        }
      }

      getLocation()
    }
  }, [cityWeather])

  return (
    <>
      {weatherData ? (
        <>
          <h1 className="text-center mt-5 fs-1">
            {weatherData.name},{weatherData.sys.country}
          </h1>{' '}
          <Row sm={1} md={2} lg={3} className="mt-5 flex-row">
            <Col className="mt-5">
              <TemperatureComponent weatherData={weatherData} />
            </Col>
            <Col className="mt-5">
              <GeneralInfoComponent weatherData={weatherData} />
            </Col>
            <Col className="mt-5">
              <MoreComponent weatherData={weatherData} />
            </Col>
          </Row>
          <h1 className="text-center mt-5 mb-4 fs-1">Nei giorni successivi</h1>{' '}
          <NextDayComponent
            latitude={weatherData.coord.lat}
            longitude={weatherData.coord.lon}
          />
        </>
      ) : (
        <Spinner
          className="position-absolute top-50 start-50 translate-middle"
          animation="border"
        />
      )}
    </>
  )
}

export default HomeCompnent
