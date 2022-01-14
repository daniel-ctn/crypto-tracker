import currencyjs from 'currency.js'

export const formatCurrency = (value: number, symbol: string) => currencyjs(value, {
  symbol,
  separator: '.',
  decimal: ',',
  precision: 0,
})