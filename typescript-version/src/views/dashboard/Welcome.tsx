// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const WeatherImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const Welcome = () => {
  // ** Hook
  const theme = useTheme()

  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>Welcome John! 🥳</Typography>

        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Good day!
        </Typography>

        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          18&#8451;
        </Typography>

        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Sunny Periods
        </Typography>

        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />

        <WeatherImg alt='weather' src='/images/weather/sunny_periods.png' />
      </CardContent>
    </Card>
  )
}

export default Welcome
