import posts from "./mock/data.json";
import { ApiResponse, Data } from "./interfacies";
import { ApiError } from "@/api/global-interfacies";

// @ts-ignore
const MOCK_DATA = import.meta.env.VITE_APP_MOCK_DATA === "true";

// Функции для выполнения запросов
// @ts-ignore
const getItems = async (): Promise<ApiResponse<Data> | ApiError> => {
  if (MOCK_DATA) {
    return posts;
  } else {
    const response = await fetch(`/items`);
    const data = await response.json();
    return { data };
  }
};

export class getCardsList {
  data: Data = { list: [] };

  async loadPosts() {
    await getItems()
      .then(result => {
        this.data = result.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}