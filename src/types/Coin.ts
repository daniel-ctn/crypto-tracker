export interface Coin {
  id: string;
  current_price: number;
  image: string;
  name: string;
  symbol: string;
  price_change_percentage_24h: number;
  market_cap?: number
}

export interface SingleCoin {
  id: string;
  image?: {
    large?: string,
    small?: string,
    thumb?: string
  };
  name: string;
  symbol: string;
  description?: {
    en: string
  },
  market_cap_rank: number
  market_data: {
    current_price: {
      usd: number
      vnd: number
    }
    price_change_percentage_24h: number;
  }
}