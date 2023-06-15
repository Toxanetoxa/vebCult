export class formatCurrency {
  constructor(private number: number, private currency: string) {}

  format(): string {
    let result = this.number.toString();

    while (result.length > 3) {
      result = result.slice(0, -3) + " " + result.slice(-3);
    }

    if (this.currency.toUpperCase() === "USD") {
      result += "$";
    }

    return result;
  }
}