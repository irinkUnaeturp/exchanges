import ccxt from "ccxt";

export class Kraken {
  private kraken: any;
  constructor(apiKey, secret) {
    this.kraken = new ccxt.kraken({ apiKey, secret });
  }

  async fetchBalance() {
    try {
      const balance = await this.kraken.fetchBalance();
      console.log(balance);
      return balance;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async placeOrder(symbol, type, side, amount, price) {
    try {
      // const balance = await this.kraken.createOrder('BTC/USD', 'limit', 'buy', 0.01, 10000);
      const balance = await this.kraken.createOrder(symbol, type, side, amount, price);
      console.log(balance);
      return balance;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }


}