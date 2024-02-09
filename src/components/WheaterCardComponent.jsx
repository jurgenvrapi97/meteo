import { Card } from 'react-bootstrap'

const WeatherCardComponent = ({ data }) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{new Date(data.dt_txt).toLocaleDateString()}</Card.Title>
        <Card.Img
          width="80"
          height="80"
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
        />
        <Card.Text>{data.weather[0].description}</Card.Text>
        <Card.Text>
          Temperatura: {Math.floor(data.main.temp - 273.15)}°C
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default WeatherCardComponent
