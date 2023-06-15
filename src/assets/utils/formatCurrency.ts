/** сделал отдельным классом утилкой чтобы при необходимости можно было использовать везде **/
export class formatCurrency {
  constructor(private number: number, private currency: string) {
    this.format();
  }

  format(): string {
    let raw = this.number.toString();
    let result = "";
    let count = raw.length + 1;

    while (count > 3) {
      result = raw.slice(-3) + " " + result;
      count -= 3;
      raw = raw.slice(0, -3);
    }

    if (0 < count <= 3) {
      result = raw + " " + result;
    }

    if (this.currency.toUpperCase() === "USD") {
      result += "$";
    }

    return result;
  }
}
