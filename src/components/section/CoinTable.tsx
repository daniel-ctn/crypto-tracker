import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  TextField, Tooltip,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import { green, grey, red } from '@mui/material/colors'
import { useTranslation } from 'react-i18next'

import { useListCoin } from 'config/queries'
import { CryptoState } from 'context/cryptoContext'
import { formatCurrency } from 'utils/currency'
import { Coin } from 'types/Coin'

const TableCellHeader = styled(TableCell)({
  color: grey[300],
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
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState<Coin[] | undefined>([])
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { currency } = CryptoState()
  const { data, isLoading } = useListCoin(currency.value)

  useEffect(() => {
    if (data && data?.length > 0) {
      const dataFilter = data?.filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
      setFilteredData(dataFilter)
    }
  }, [data, data?.length, search])

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
      setPage(newPage)
    }, [setPage],
  )

  const handleChangeRowsPerPage = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10))
      setPage(0)
    }, [setRowsPerPage, setPage],
  )

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Typography variant='h4' m={3}>
        {t('tableTitle')}
      </Typography>
      <Box mb={3}>
        <TextField
          label={t('searchText')}
          variant='outlined'
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: '100%' }}
        />
      </Box>
      <TableContainer component={Paper}>
        {isLoading ? (
          <Stack spacing={1}>
            <Skeleton variant='text' />
            <Skeleton variant='circular' width={40} height={40} />
            <Skeleton variant='rectangular' width={210} height={118} />
          </Stack>
        ) : (
          <Table sx={{ minWidth: 650 }} aria-label='coin market table'>
            <TableHead sx={{ backgroundColor: 'primary.main' }}>
              <TableRow>
                <TableCellHeader>{t('tableHeader.c1')}</TableCellHeader>
                <TableCellHeader align='right'>{t('tableHeader.c2')}</TableCellHeader>
                <TableCellHeader align='right'> {t('tableHeader.c3')} </TableCellHeader>
                <TableCellHeader align='right'>{t('tableHeader.c4')} </TableCellHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                  onClick={() => navigate(`coin/${row.id}`)}
                >
                  <TableCell component='th' scope='row'>
                    <Tooltip title='Click to see detail info' placement='top-start'>
                      <Box sx={{ display: 'flex', height: '84px', alignItems: 'center' }}>
                        <CoinImage src={row.image} alt={row.name} />
                        <Box display='flex' flexDirection='column' justifyContent='center' ml={3}>
                          <Typography variant='h5'>{row.symbol.toUpperCase()}</Typography>
                          <Typography variant='h6' color={grey[400]} fontWeight='normal'>{row.name}</Typography>
                        </Box>
                      </Box>
                    </Tooltip>
                  </TableCell>
                  <TableCell align='right'>{formatCurrency(row.current_price, currency.symbol).format()}</TableCell>
                  <TableCell align='right'
                             sx={{ color: row.price_change_percentage_24h > 0 ? green[400] : red[400] }}>
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
        count={filteredData?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        showFirstButton={true}
        showLastButton={true}
      />
    </Container>
  )
}

export default CoinTable
