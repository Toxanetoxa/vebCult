// Типы данных ответов от сервера
export interface ApiResponse {
  data: Post[],
}

export interface Post {
  id: number,
  img: string,
  title: string,
  description: string,
  price: object | null,
  is_sales: boolean
}

export interface Data {
  list: Post[];
}