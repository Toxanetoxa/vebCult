// @ts-ignore
const MOCK_DATA: Boolean = import.meta.env.MOCK_DATA ?? true;
//@ts-ignore
const API_URL: URL = import.meta.env.API_URL ?? "";

export class SetItem {
  dateResponse: string = "";

  async getData(): Promise<any> {
    if (MOCK_DATA) {
      alert("success");
    } else {
      const response = await fetch(API_URL);
      if (!response.ok) {
        alert("Error");
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      alert('success');
      return this.dateResponse = data;
    }

  }
}