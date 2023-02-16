// ** React Imports
import { ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import AccountMultiple from 'mdi-material-ui/AccountMultiple'
import BookOpenPageVariant from 'mdi-material-ui/BookOpenPageVariant'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import BriefcaseCheck from 'mdi-material-ui/BriefcaseCheck'
import CalendarCheck from 'mdi-material-ui/CalendarCheck'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

interface DataType {
  stats: string
  title: string
  color: ThemeColor
  icon: ReactElement
}

const salesData: DataType[] = [
  {
    stats: '',
    title: 'Candidates',
    color: 'primary',
    icon: <AccountMultiple sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '',
    title: 'Test Templates',
    color: 'success',
    icon: <BookOpenPageVariant sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '',
    title: 'Questions',
    color: 'warning',
    icon: <HelpCircleOutline sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '',
    title: 'Domain Knowledge',
    color: 'info',
    icon: <BriefcaseCheck sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '',
    title: 'Calendar',
    color: 'error',
    icon: <CalendarCheck sx={{ fontSize: '1.75rem' }} />
  }
]

const renderStats = () => {
  return salesData.map((item: DataType, index: number) => (
    <Grid item xs={12} sm={2} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`
          }}
        >
          {item.icon}
        </Avatar>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{item.title}</Typography>

          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const QuickAccess = () => {
  return (
    <Card>
      <CardHeader
        title='Quick Access'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
              Registered 1M candidates, 900k tests
            </Box>
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />

      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 3]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default QuickAccess
