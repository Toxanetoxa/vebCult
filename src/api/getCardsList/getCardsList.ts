import posts from "./mock/data.json";
import { ApiError, ApiResponse, Data, HttpResponse } from "./interfacies";
// @ts-ignore
const MOCK_DATA: Boolean = import.meta.env.MOCK_DATA ?? false;
// @ts-ignore
const API_URL:RequestInfo | URL = import.meta.env.API_URL ?? 'https://jsonplaceholder.typicode.com/posts/1';

// Функции для выполнения запросов
// @ts-ignore


export class GetCardsList {
  data!: Data
  constructor() {
    this.data = {} as Data
  }
  async getPosts () {
    if (!MOCK_DATA) {
      this.data = posts.data
    } else {
      await fetch(API_URL)
        .then(result => result.json())
        .then(data => {
          this.data = data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
}