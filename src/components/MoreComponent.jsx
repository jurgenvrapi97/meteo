import Card from 'react-bootstrap/Card'
import sunrise from '../icons/dawn_1582750.png'
import sunset from '../icons/sunset_577549.png'

const MoreComponent = ({ weatherData }) => {
  const sunriseDate = new Date(
    (weatherData.sys.sunrise + weatherData.timezone) * 1000
  )
  const sunsetDate = new Date(
    (weatherData.sys.sunset + weatherData.timezone) * 1000
  )
  return (
    <Card className="text-center h-100">
      <Card.Body>
        <Card.Title>Info generali </Card.Title>
        <hr />

        <Card.Text>
          Temperatura percepita: {weatherData.main.feels_like}°C
        </Card.Text>
        <Card.Text>
          Pressione atmosferica: {weatherData.main.pressure} hPa
        </Card.Text>
        <Card.Text>Visibilità: {weatherData.visibility / 1000} km</Card.Text>
        <Card.Text>
          {' '}
          <img
            src={sunrise}
            width="40"
            height="40"
            alt="max temperature"
          />{' '}
          Alba: {sunriseDate.toLocaleTimeString()}{' '}
        </Card.Text>
        <Card.Text>
          {' '}
          <img src={sunset} width="40" height="40" alt="max temperature" />{' '}
          Tramonto: {sunsetDate.toLocaleTimeString()}{' '}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MoreComponent
