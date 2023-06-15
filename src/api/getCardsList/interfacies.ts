// Типы данных ответов от сервера
export interface ApiResponse {
  data: Data,
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
  title: string,
  list: Post[]
}