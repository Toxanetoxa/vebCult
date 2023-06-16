// @ts-ignore
const MOCK_DATA: Boolean = import.meta.env.MOCK_DATA ?? false;
export class SetItem {
  dateResponse: string = "";

  async getData(): Promise<any> {
    if (MOCK_DATA) {
      alert("success");
    } else {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response) {
        alert("Error");
        throw new Error(`HTTP error! Status: ${response}`);
      }
      const data = await response.json();
      alert('success');
      return this.dateResponse = data;
    }

  }
}