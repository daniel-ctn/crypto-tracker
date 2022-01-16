import { FC, useState } from 'react'
import { Box, Button, LinearProgress } from '@mui/material'
import { useHistoricalCoin } from 'config/queries'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { format } from 'date-fns'
import { ThemeState } from '../../context/themeContext'

interface CoinInfoProps {
  id?: string
  currency: string
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Currency Data Chart',
    },
  },
}

const CoinInfo: FC<CoinInfoProps> = ({ id, currency }) => {
  const [day, setDay] = useState(365)
  const {theme} = ThemeState()
  const { data, isFetching } = useHistoricalCoin(id, day, currency)

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' mt={4} p={4}>
      {isFetching ? <LinearProgress /> : (
        <>
          <Line
            options={options}
            data={{
              labels: data?.prices?.map(coin => format(coin[0], 'dd/MM/yyyy')),
              datasets: [
                {
                  data: data?.prices?.map(coin => coin[1]),
                  label: `Price ( Past ${day} Days ) in ${currency}`,
                  borderColor: theme.palette.primary.main,
                },
              ],
            }}
          />
          <Box display='flex' gap={4} mt={2}>
            <Button sx={{px: 4}} variant="outlined" onClick={() => setDay(30)}>30 Days</Button>
            <Button sx={{px: 4}} variant="outlined" onClick={() => setDay(60)}>60 Days</Button>
            <Button sx={{px: 4}} variant="outlined" onClick={() => setDay(90)}>90 Days</Button>
            <Button sx={{px: 4}} variant="outlined" onClick={() => setDay(365)}>365 Days</Button>
          </Box>
        </>
      )}
    </Box>
  )
}

export default CoinInfo
