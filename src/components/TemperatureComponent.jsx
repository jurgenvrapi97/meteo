import Card from 'react-bootstrap/Card'
import Max from '../icons/max.png'
import Min from '../icons/min.png'

const TemperatureComponent = ({ weatherData }) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Live:{weatherData.main.temp}°C </Card.Title>
        <hr />
        <Card.Img
          width="80"
          height="80"
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
        />
        <Card.Text>{weatherData.weather[0].description}</Card.Text>
        <hr />
        <Card.Text>
          {' '}
          <img
            src={Max}
            width="40"
            height="40"
            alt="max temperature"
          /> Max: {weatherData.main.temp_max}°C
        </Card.Text>
        <Card.Text>
          {' '}
          <img
            src={Min}
            width="40"
            height="40"
            alt="min temperature"
          /> Min: {weatherData.main.temp_min}°C
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default TemperatureComponent
