export interface Coin {
  id: string;
  current_price: number;
  image: string;
  name: string;
  symbol: string;
  price_change_percentage_24h: number;
  market_cap?: number
}