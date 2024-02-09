import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCardComponet from './WheaterCardComponent'

const NextDayComponent = ({ latitude, longitude }) => {
  const [forecastData, setForecastData] = useState([])
  const API_URL = 'https://api.openweathermap.org/data/2.5/forecast'
  const APP_ID = '5b0f96f4cd37b0e9c3762275775e4c36'

  useEffect(() => {
    async function fetchForecast(latitude, longitude) {
      try {
        const response = await fetch(
          `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${APP_ID}`
        )
        if (response.ok) {
          const data = await response.json()
          const filteredData = data.list.filter((item) =>
            item.dt_txt.includes('12:00:00')
          )
          setForecastData(filteredData)
          console.log(data)
        } else {
          console.error('Errore nella richiesta API:', response.status)
        }
      } catch (error) {
        console.error('Errore nella richiesta API:', error)
      }
    }

    fetchForecast(latitude, longitude)
  }, [])

  return (
    <Row className="mb-4 justify-content-center">
      {forecastData.map((data, index) => (
        <Col key={index} className="col-8 mb-3">
          <WeatherCardComponet data={data} />
        </Col>
      ))}
    </Row>
  )
}

export default NextDayComponent
