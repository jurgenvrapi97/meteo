import Card from 'react-bootstrap/Card'
import wind from '../icons/wind_959711.png'
import umidity from '../icons/blood_9328027.png'
import season from '../icons/season_11525992.png'
import cordinate from '../icons/cardinal-points_3466636.png'

const GeneralInfoComponent = ({ weatherData }) => {
  function degToCompass(num) {
    const val = Math.floor(num / 22.5 + 0.5)
    const arr = [
      'N',
      'NNE',
      'NE',
      'ENE',
      'E',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW',
    ]
    return arr[val % 16]
  }

  const windDirection = degToCompass(weatherData.wind.deg)
  return (
    <Card className="text-center h-100">
      <Card.Body>
        <Card.Img width="80" height="80" src={season} />

        <hr />
        <div className="d-flex flex-column">
          <Card.Text className="mt-3">
            {' '}
            <img src={wind} width="40" height="40" alt="max temperature" />{' '}
            velocità: {weatherData.wind.speed} m/s
            <span className="d-block mt-2">
              {' '}
              <img
                src={cordinate}
                width="40"
                height="40"
                alt="direzione"
              />{' '}
              Direzione: {windDirection}
            </span>
          </Card.Text>
          <Card.Text className="mb-2">
            {' '}
            <img
              src={umidity}
              width="40"
              height="40"
              alt="min temperature"
            />{' '}
            Umidità: {weatherData.main.humidity}%
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  )
}

export default GeneralInfoComponent
