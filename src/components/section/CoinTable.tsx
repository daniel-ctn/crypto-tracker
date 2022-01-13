import { ChangeEvent, FC, useState } from 'react'
import {
  Box,
  Container, Paper, Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead, TablePagination,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import { green, grey, red, yellow } from '@mui/material/colors'
import currencyjs from 'currency.js'

import { useListCoin } from 'config/queries'
import { CryptoState } from 'context/cryptoContext'

const TableCellHeader = styled(TableCell)({
  color: grey[700],
  fontWeight: 'bold',
  fontSize: '18px',
})

const CoinImage = styled('img')({
  width: '60px',
  height: '60px',
})

const CoinTable: FC = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const { currency } = CryptoState()
  const { data, isLoading } = useListCoin(currency.value)

  const formatCurrency = (value: number, symbol: string) => currencyjs(value, {
    symbol,
    separator: '.',
    decimal: ',',
    precision: 0,
  })

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Typography variant='h4' sx={{ margin: '18px' }}>
        Crypto Prices by Market Cap
      </Typography>
      <TextField
        label='Search for Crypto Currency'
        variant='outlined'
        sx={{
          marginBottom: '20px',
          width: '100%',
        }} />
      <TableContainer component={Paper}>
        {isLoading ? (
          <Stack spacing={1}>
            <Skeleton variant='text' />
            <Skeleton variant='circular' width={40} height={40} />
            <Skeleton variant='rectangular' width={210} height={118} />
          </Stack>
        ) : (
          <Table sx={{ minWidth: 650 }} aria-label='coin market table'>
            <TableHead sx={{ backgroundColor: yellow[700] }}>
              <TableRow>
                <TableCellHeader>Coin</TableCellHeader>
                <TableCellHeader align='right'>Price</TableCellHeader>
                <TableCellHeader align='right'> 24h Change </TableCellHeader>
                <TableCellHeader align='right'> Market Cap </TableCellHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    <Box sx={{ display: 'flex', height: '90px', alignItems: 'center' }}>
                      <CoinImage src={row.image} alt={row.name} />
                      <Box
                        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '25px' }}>
                        <Typography variant='h5'>{row.symbol.toUpperCase()}</Typography>
                        <Typography variant='h6' color={grey[400]} fontWeight='normal'>{row.name}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align='right'>{formatCurrency(row.current_price, currency.symbol).format()}</TableCell>
                  <TableCell align='right' sx={{ color: row.price_change_percentage_24h > 0 ? green[400] : red[400] }}>
                    {row.price_change_percentage_24h > 0 && '+'}
                    {row.price_change_percentage_24h.toFixed(2)}%
                  </TableCell>
                  <TableCell align='right'>{formatCurrency(row.market_cap || 0, currency.symbol).format()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={data?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  )
}

export default CoinTable
