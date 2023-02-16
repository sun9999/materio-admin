// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'
import Welcome from 'src/views/dashboard/Welcome'
import QuickAccess from 'src/views/dashboard/QuickAccess'
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";

export default function Dashboard() {
  if (typeof window === 'undefined') {
    console.log('window is undefined')

    return <></>
  } else {
    return (
      <ApexChartWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Welcome />
          </Grid>

          <Grid item xs={12} md={8}>
            <QuickAccess />
          </Grid>

          <Grid item xs={12} md={12}>
            <Card>
              <CardHeader title='Candidates' titleTypographyProps={{ variant: 'h6' }} />
              <TableStickyHeader />
            </Card>
          </Grid>

          <Grid item xs={12} md={12}>
            <Card>
              <CardHeader title='Test Templates' titleTypographyProps={{ variant: 'h6' }} />
              <TableStickyHeader />
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Table />
          </Grid>
        </Grid>
      </ApexChartWrapper>
    )
  }
}
